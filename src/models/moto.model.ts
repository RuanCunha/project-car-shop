import { Model } from 'mongoose';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MongoModel from './MongoModel';
import { motoMongooseModel } from './schemas/motorcycleSchema';

export default class MotoModel extends MongoModel<Motorcycle> {
  constructor(mongooseModel: Model<Motorcycle> = motoMongooseModel) {
    super(mongooseModel);
  }
}
