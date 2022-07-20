import { Model } from '../interfaces/ModelInterface';
import { CarServiceInterface } from '../interfaces/CarServiceInterface';
import { Car, CarSchema } from '../interfaces/CarInterface';
import CarModel from '../models/car.model';

export default class CarService implements CarServiceInterface {
  private _carModel: Model<Car>;

  constructor(carModel: Model<Car> = new CarModel()) {
    this._carModel = carModel;
  }

  async create(car: Car): Promise<Car> {
    CarSchema.parse(car);
    const carCreated = await this._carModel.create(car);
    return carCreated;
  }
  
  async read(): Promise<Car[] | null> {
    const cars = await this._carModel.read();
    return cars;
  }
}