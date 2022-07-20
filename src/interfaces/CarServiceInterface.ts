import { Car } from './CarInterface';

export interface CarServiceInterface {
  create(car: Car): Promise<Car | null>,
  read(): Promise<Car[] | null>,
}
