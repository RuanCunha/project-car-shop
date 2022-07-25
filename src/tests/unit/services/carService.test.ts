import { expect } from 'chai';
import CarService from '../../../services/car.service';
import { CarModelMock, carMock, arrayCarsMock, carMockWithId } from '../mocks';

describe('Car Service', () => {
  describe('Create car', () => {
    it('Sucess', async () => {
      const carService = new CarService(new CarModelMock());

      const result = await carService.create(carMock);

      expect(result).to.be.deep.equal(carMock);
    })
  })

  describe('Read cars', () => {
    it('Sucess', async () => {
      const carService = new CarService(new CarModelMock());

      const result = await carService.read();

      expect(result).to.be.deep.equal(arrayCarsMock);
    })
  })

  describe('Read one car', () => {
    it('Sucess', async () => {
      const carService = new CarService(new CarModelMock());

      const result = await carService.readOne(carMockWithId._id);

      expect(result).to.be.deep.equal(carMockWithId);
    })
  })

  describe('Update car', () => {
    it('Sucess', async () => {
      const carService = new CarService(new CarModelMock());

      const result = await carService.update(carMockWithId._id, carMock);

      expect(result).to.be.deep.equal(carMockWithId);
    })
  })

  describe('Delete car', () => {
    it('Sucess', async () => {
      const carService = new CarService(new CarModelMock());

      const result = await carService.delete(carMockWithId._id);

      expect(result).to.be.deep.equal(carMockWithId);
    })
  })
})
