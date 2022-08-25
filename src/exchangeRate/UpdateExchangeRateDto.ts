import { ApiProperty } from '@nestjs/swagger';

export class UpdateExchangeRateDto {
  @ApiProperty()
  readonly currency1: string;

  @ApiProperty()
  readonly currency2: string;

  @ApiProperty()
  readonly rate: number;
  
  @ApiProperty()
  readonly date: Date;
}
