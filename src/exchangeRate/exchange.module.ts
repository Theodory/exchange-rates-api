import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExchangeRateController } from './exchange.controller';
import { ExchangeRateService } from './exchange.service';
import { ExchangeRateSchema } from './ExchangeRate.model';

@Module({
  controllers: [ExchangeRateController],
  providers: [ExchangeRateService],
  imports: [
    MongooseModule.forFeature([{ name: 'rates', schema: ExchangeRateSchema }]),
  ],
})
export class ExchangeRateModule {}
