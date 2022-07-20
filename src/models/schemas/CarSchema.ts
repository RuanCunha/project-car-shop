import { model, Schema } from 'mongoose';
import { Car } from '../../interfaces/CarInterface';

export const carSchema = new Schema<Car>({
  model: { type: 'string', required: true },
  year: { type: 'number', required: true },
  color: { type: 'string', required: true },
  status: { type: 'boolean', required: false },
  buyValue: { type: 'number', required: true },
  seatsQty: { type: 'number', required: true },
  doorsQty: { type: 'number', rquireqd: true },
}, { versionKey: false });

export const carMongooseModel = model('car', carSchema);
