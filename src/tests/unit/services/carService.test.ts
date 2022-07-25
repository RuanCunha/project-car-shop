import { expect } from 'chai';
import mongoose from 'mongoose';
import { Car } from '../../../interfaces/CarInterface';
import { Model } from '../../../interfaces/ModelInterface';
import CarModel from '../../../models/car.model';
import CarService from '../../../services/car.service';
import MotoService from '../../../services/moto.service';
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