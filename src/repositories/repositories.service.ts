import { GitHubCommit } from '@/common/interfaces/github-commit.interface'
import { GitHubRepository } from '@/common/interfaces/github-repository.interface'
import {
  BadGatewayException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { Repository } from '@/repositories/interfaces/repository.interface'

@Injectable()
export class RepositoriesService {
  async listRepositories(): Promise<Repository[]> {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
      },
    })

    if (!response.ok) {
      if (response.status >= 500) {
        throw new BadGatewayException(
          'There was an error listing the repositories from the GitHub API.',
        )
      }

      throw new InternalServerErrorException()
    }

    const repositories: GitHubRepository[] = await response.json()

    const lastCommitPromises = repositories.map(({ commits_url }) => {
      async function getPromise() {
        const response = await fetch(
          commits_url.replace('{/sha}', '').concat('?per_page=1'),
          {
            headers: {
              Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
            },
          },
        )

        const commits: GitHubCommit[] = await response.json()
        const raw = commits[0]

        return raw
          ? {
              message: raw.commit.message,
              date: raw.commit.author.date,
            }
          : null
      }

      return getPromise()
    })

    const lastCommits = await Promise.all(lastCommitPromises)

    return repositories.map(
      ({ name, stargazers_count, forks_count, commits_url }, index) => ({
        name,
        stargazers_count,
        forks_count,
        last_commit: lastCommits[index],
        commits_url,
      }),
    )
  }
}
