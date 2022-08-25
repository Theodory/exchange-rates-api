import { Transform } from 'class-transformer';
import {  IsNotEmpty,IsDate, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ConversionDto {
    @ApiProperty()
  readonly currency1: string;

  @ApiProperty()
  readonly currency2: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly amount: number;

  @ApiPropertyOptional({format: 'yyyy-mm-dd'})
  @IsOptional()
  @Transform( ({ value }) => new Date(value))
  @IsDate({message: "Date should be of format 'yyyy-mm-dd'."})
  date?: Date;
}