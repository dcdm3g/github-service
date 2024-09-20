export interface Repository {
  name: string
  stargazers_count: number
  forks_count: number
  last_commit: {
    message: string
    date: string
  } | null
}