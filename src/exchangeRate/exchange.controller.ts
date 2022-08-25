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


}
