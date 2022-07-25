import { Car } from "../../interfaces/CarInterface"
import CarModel from "../../models/car.model";
import CarService from "../../services/car.service";

export const carMock: Car = {
  status: true,
  model: 'Modelo Generico',
  year: 2000,
  color: 'Cor padrão',
  buyValue: 20000,
  doorsQty: 3,
  seatsQty: 6,
}

export const carMockWithId = {
  _id: '123456789123456789123456',
  status: true,
  model: 'Modelo Generico',
  year: 2000,
  color: 'Cor padrão',
  buyValue: 20000,
  doorsQty: 3,
  seatsQty: 6,
}

export const arrayCarsMock: Car[] = [
  {
    status: true,
    model: 'Modelo Generico',
    year: 2000,
    color: 'Cor padrão',
    buyValue: 20000,
    doorsQty: 3,
    seatsQty: 6,
  },
  {
    status: false,
    model: 'Modelo Generico 2',
    year: 2010,
    color: 'Outra cor',
    buyValue: 30000,
    doorsQty: 4,
    seatsQty: 5,
  }
]

export class CarModelMock extends CarModel {
  async create(obj: Car): Promise<Car> {
    return obj;
  }
  async read(): Promise<Car[]> {
    return arrayCarsMock;
  }
  async readOne(id: string): Promise<Car | null> {
    return carMockWithId;
  }
  async update(id: string, obj: Car): Promise<Car | null> {
    return carMockWithId;
  }
  async delete(id: string): Promise<Car | null> {
    return carMockWithId;
  }
}

export class CarServiceMock extends CarService {
  async create(car: Car): Promise<Car> {
    return car;
  }
  async read(): Promise<Car[]> {
    return arrayCarsMock;
  }
  async readOne(id: string): Promise<Car> {
    return carMockWithId;
  }
  async update(id: string, car: Car): Promise<Car> {
    return carMockWithId;
  }
  async delete(id: string): Promise<Car | null> {
    return carMockWithId;
  }
}