import { Repository } from '@/repositories/interfaces/repository.interface'
import { RepositoriesService } from '@/repositories/repositories.service'
import { Controller, Get } from '@nestjs/common'

@Controller('/repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Get()
  async listRepositories(): Promise<Repository[]> {
    const repositories = await this.repositoriesService.listRepositories()
    return repositories
  }
}
