import { Model } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';
import { carMongooseModel } from './schemas/CarSchema';

export default class CarModel extends MongoModel<Car> {
  constructor(mongooseModel: Model<Car> = carMongooseModel) {
    super(mongooseModel);
  }
}
