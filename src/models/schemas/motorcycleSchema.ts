import { model, Schema } from 'mongoose';
import { Motorcycle } from '../../interfaces/MotorcycleInterface';

export const motoSchema = new Schema<Motorcycle>({
  model: { type: 'string', required: true },
  year: { type: 'number', required: true },
  color: { type: 'string', required: true },
  status: { type: 'boolean', required: false },
  buyValue: { type: 'number', required: true },
  category: { type: 'string', required: true },
  engineCapacity: { type: 'number', required: true },
}, { versionKey: false });

export const motoMongooseModel = model('motorcycle', motoSchema);
