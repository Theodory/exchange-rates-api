import { Transform } from 'class-transformer';
import {  IsNotEmpty,IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExchangeRateDto {
  @ApiProperty()
  readonly currency1: string;
  @ApiProperty()
  readonly currency2: string;
  @ApiProperty()
  readonly rate: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform( ({ value }) => new Date(value))
  @IsDate({message: "Date should be of format 'yyyy-mm-dd'."})
  date: Date;
}
