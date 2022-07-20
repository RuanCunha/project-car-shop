import { Car } from './CarInterface';

export interface CarServiceInterface {
  create(car: Car): Promise<Car | null>,
  read(): Promise<Car[] | null>,
  readOne(id: string): Promise<Car | null>,
  update(id: string, car: Car): Promise<Car | null>
  delete(id: string): Promise<Car | null>,
}
