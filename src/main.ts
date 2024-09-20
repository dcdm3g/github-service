import { MainModule } from '@/main.module'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
}

bootstrap()
