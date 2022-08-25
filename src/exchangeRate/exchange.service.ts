import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { CreateExchangeRateDto } from './CreateExchangeRateDto';
import { UpdateExchangeRateDto } from './UpdateExchangeRateDto';
import { ExchangeRate } from './ExchangeRate.model';

@Injectable()
export class ExchangeRateService {
  constructor(
    @InjectModel('rates') private exchangeRateModel: Model<ExchangeRate>,
  ) {}



}
