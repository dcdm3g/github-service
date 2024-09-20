import { RepositoriesModule } from '@/repositories/repositories.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot(), RepositoriesModule],
})
export class MainModule {}
