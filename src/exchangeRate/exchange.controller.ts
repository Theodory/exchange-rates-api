import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateExchangeRateDto } from './CreateExchangeRateDto';
import { ExchangeRateService } from './exchange.service';
import { UpdateExchangeRateDto } from './UpdateExchangeRateDto';
import { RateExchangeDto } from './RateExchangeDto';
import { ConversionDto } from './ConversionDto';
import { ApiTags } from '@nestjs/swagger'

@ApiTags('exchange-rates')

@Controller('exchange-rates')
export class ExchangeRateController {
  constructor(private readonly ExchangeRateService: ExchangeRateService) {}

  @Post()
  createRates(@Body() rate: CreateExchangeRateDto): any {
    return this.ExchangeRateService.createRate(rate);
  }

  @Get()
  getRates(
    @Query('q') keyword?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('skip', new DefaultValuePipe(0), ParseIntPipe) skip?: number,
  ): any {
    return this.ExchangeRateService.getRates(keyword, skip, limit);
  }

  @Get('/convert')
   exhange(@Query() q: ConversionDto): any{
    return  this.ExchangeRateService.exchange(q);
  }

  @Get('/rate')
  getRate(
    @Query() q: RateExchangeDto
    )
    : any {

    return this.ExchangeRateService.getRate(q);
  }

  @Patch(':id')
  updateRate(
    @Param('id') id: string,
    @Body() rate: UpdateExchangeRateDto,
  ): any {
    return this.ExchangeRateService.updateRate(id, rate);
  }

  @Delete(':id')
  deleteRate(@Param('id') id: string): any {
    return this.ExchangeRateService.deleteRate(id);
  }
}
