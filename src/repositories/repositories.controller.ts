import { ListRepositoriesQuery } from '@/repositories/dto/list-repositories-query.dto'
import { Repository } from '@/repositories/interfaces/repository.interface'
import { RepositoriesService } from '@/repositories/repositories.service'
import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common'

@Controller('/repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Get()
  async listRepositories(
    @Query() { page, per_page }: ListRepositoriesQuery,
  ): Promise<Repository[]> {
    const repositories = await this.repositoriesService.listRepositories({
      page,
      per_page,
    })

    return repositories
  }
}
