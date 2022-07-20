import { Motorcycle } from './MotorcycleInterface';

export interface MotoServiceInterface {
  create(motorcycle: Motorcycle): Promise<Motorcycle | null>,
  read(): Promise<Motorcycle[] | null>,
  readOne(id: string): Promise<Motorcycle | null>,
  update(id: string, motorcycle: Motorcycle): Promise<Motorcycle | null>
  delete(id: string): Promise<Motorcycle | null>,
}
