import { Repository } from '@/repositories/interfaces/repository.interface'
import { RepositoriesService } from '@/repositories/repositories.service'
import { Controller, Get, Query } from '@nestjs/common'

@Controller('/repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Get()
  async listRepositories(
    @Query('page') page: number,
    @Query('per_page') per_page: number,
  ): Promise<Repository[]> {
    const repositories = await this.repositoriesService.listRepositories({
      page,
      per_page,
    })

    return repositories
  }
}
