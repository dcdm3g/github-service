import { Transform } from 'class-transformer'
import { IsInt, IsOptional, Min } from 'class-validator'

export class ListRepositoriesQuery {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => Number.parseInt(value), { toClassOnly: true })
  page?: number

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => Number.parseInt(value), { toClassOnly: true })
  per_page?: number
}
