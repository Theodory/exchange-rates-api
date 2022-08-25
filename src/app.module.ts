import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeRateModule } from './exchangeRate/exchange.module';

@Module({
  imports: [
    ExchangeRateModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
