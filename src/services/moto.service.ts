import { Model } from '../interfaces/ModelInterface';
import { MotoServiceInterface } from '../interfaces/MotoServiceInterface';
import {
  Motorcycle, MotorcycleSchema } from '../interfaces/MotorcycleInterface';
import MotoModel from '../models/moto.model';

export default class MotoService implements MotoServiceInterface {
  private _motoModel: Model<Motorcycle>;

  constructor(motoModel: Model<Motorcycle> = new MotoModel()) {
    this._motoModel = motoModel;
  }

  async create(motorcycle: Motorcycle): Promise<Motorcycle> {
    MotorcycleSchema.parse(motorcycle);
    const motoCreated = await this._motoModel.create(motorcycle);
    return motoCreated;
  }
  
  async read(): Promise<Motorcycle[] | null> {
    const motorcycles = await this._motoModel.read();
    return motorcycles;
  }

  async readOne(id: string): Promise<Motorcycle | null> {
    const motorcycle = await this._motoModel.readOne(id);
    return motorcycle;
  }

  async update(id: string, motorcycle: Motorcycle): Promise<Motorcycle | null> {
    MotorcycleSchema.parse(motorcycle);
    const result = await this._motoModel.update(id, motorcycle);
    return result;
  }

  async delete(id: string): Promise<Motorcycle | null> {
    const motorcycle = await this._motoModel.delete(id);
    return motorcycle;
  }
}