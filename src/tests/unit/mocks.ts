import { Car } from "../../interfaces/CarInterface"

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
