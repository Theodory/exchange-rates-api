import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { now,Document } from 'mongoose';

@Schema()
export class ExchangeRate extends Document {
  @Prop({ required: true })
  currency1: string;

  @Prop({ required: true })
  currency2: string;

  @Prop({ required: true })
  rate?: number;
  
  @Prop({ required: true })
  date?: Date;

  @Prop({default: now()})
  createdAt?: Date;

  @Prop({default: now()})
  updatedAt?: Date;
  
}
export const ExchangeRateSchema = SchemaFactory.createForClass(ExchangeRate);
