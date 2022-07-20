import { isValidObjectId, Model } from 'mongoose';
import { Model as IModel } from '../interfaces/ModelInterface';

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(protected model: Model<T>) {}

  async create(obj: T): Promise<T> {
    const result = await this.model.create(obj);
    return result;
  }

  async read(): Promise<T[]> {
    const result = await this.model.find();
    return result;
  }

  async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;
    const result = await this.model.findOne({ _id: id });
    return result;
  }

  async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    const result = await this.model.findOneAndUpdate({ _id: id }, obj);
    return result;
  }

  async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) return null;

    const result = await this.model.findOneAndDelete({ _id: id });
    return result;
  }
}