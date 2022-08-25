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

  createRate(data: CreateExchangeRateDto): Observable<ExchangeRate> {
   try {
    const createPost = this.exchangeRateModel.create({ ...data });
    return from(createPost);
   } catch (error) {
     console.log("Error here");
   }
  }

  getRates(keyword?: string, skip = 0, limit = 10): Observable<ExchangeRate[]> {
    if (keyword) {
      return from(
        this.exchangeRateModel
          .find({ title: { $regex: '.*' + keyword + '.*' } })
          .skip(skip)
          .limit(limit)
          .exec(),
      );
    } else {
      return from(
        this.exchangeRateModel.find({}).skip(skip).limit(limit).exec(),
      );
    }
  }

   async getRate(q): Promise<{}> {
    
    const queryDate = (q.hasOwnProperty('date') && q.date !== null)? q.date : this.getCurrentDate();
    const {currency1,currency2,rate,date} = await this.findCurrencyByFields(q.from,q.to,queryDate);

    if (!currency1) throw new NotFoundException();

    return {currency1,currency2,rate,date} ;
  }

  updateRate(
    id: string,
    data: UpdateExchangeRateDto,
  ): Observable<ExchangeRate> {
    return from(
      this.exchangeRateModel.findOneAndUpdate({ _id: id }, data).exec(),
    );
  }

  deleteRate(id: string): Observable<ExchangeRate> {
    return from(this.exchangeRateModel.findOneAndDelete({ _id: id }).exec());
  }

   async exchange(q): Promise<{}>{
    const queryDate = (q.hasOwnProperty('date') && q.date !== null)? q.date : this.getCurrentDate();
    const {currency1,currency2,rate,date} = await this.findCurrencyByFields(q.from,q.to,queryDate);

    if (!currency1) throw new NotFoundException();

   const conversion = this.roundConvertedValue(rate * q.amount);

    return {
     from: currency1, 
     to: currency2, 
     rate: rate, 
     date:date,
     amount_to_convert: Number(q.amount), 
      converted_amount:conversion
    };
  } 


  
  private async findCurrencyByFields(from,to,date?: Date): Promise<ExchangeRate> {
      const dataQuery = { currency1: from,currency2: to};
       const updatedDataQuery = date != null? {...dataQuery,date: new Date(date)}: dataQuery;

      const exchangeCurrency = await this.exchangeRateModel.findOne(updatedDataQuery).exec();
      
     if (!exchangeCurrency) throw new NotFoundException();

    return exchangeCurrency;
  }

  private getCurrentDate()
  {
    let date = new Date()
    let day = date.getDate();
    let month = String(date.getMonth()+1).padStart(2, "0");
    let year = date.getFullYear();
    
    return `${year}-${month}-${day}`;
  }

  private roundConvertedValue(num): any
  {
   return  Math.round( num * 100 + Number.EPSILON ) / 100
  }

}
