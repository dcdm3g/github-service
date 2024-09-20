import { RepositoriesController } from '@/repositories/repositories.controller'
import { RepositoriesService } from '@/repositories/repositories.service'
import { Module } from '@nestjs/common'

@Module({
  providers: [RepositoriesService],
  controllers: [RepositoriesController]
})
export class RepositoriesModule {}
