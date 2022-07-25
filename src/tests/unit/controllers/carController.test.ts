import { stub, SinonStub } from 'sinon';
import { expect } from 'chai';
import CarController from '../../../controllers/car.controller';
import { carMock, carMockWithId, CarServiceMock } from '../mocks';
import { NextFunction, Request, Response } from 'express';

describe('Car Controller', () => {
  const req = {} as Request;
  const res = {} as Response;
  const next = () => ({}) as NextFunction;

  describe('Create car', () => {
    before(() => {
      res.status = stub().returns(res);
      res.json = stub().returns(res);
      req.body = carMock;
    })
    it('Success', async () => {
      const carController = new CarController(new CarServiceMock)
      await carController.create(req, res, next);

      expect((res.status as SinonStub).calledWith(201)).to.be.true;
    })
  })

  describe('Read cars', () => {
    before(() => {
      res.status = stub().returns(res);
      res.json = stub().returns(res);
    })
    it('Success', async () => {
      const carController = new CarController(new CarServiceMock)
      await carController.read(req, res, next);

      expect((res.status as SinonStub).calledWith(200)).to.be.true;
    })
  })

  describe('Read one car', () => {
    before(() => {
      res.status = stub().returns(res);
      res.json = stub().returns(res);
      req.params = { id: carMockWithId._id };
    })
    it('Success', async () => {
      const carController = new CarController(new CarServiceMock)
      await carController.readOne(req, res, next);

      expect((res.status as SinonStub).calledWith(200)).to.be.true;
    })
  })

  describe('Update car', () => {
    before(() => {
      res.status = stub().returns(res);
      res.json = stub().returns(res);
      req.params = { id: carMockWithId._id };
      req.body = carMock;
    })
    it('Success', async () => {
      const carController = new CarController(new CarServiceMock)
      await carController.update(req, res, next);

      expect((res.status as SinonStub).calledWith(200)).to.be.true;
    })
  })

  describe('Delete car', () => {
    before(() => {
      res.status = stub().returns(res);
      res.json = stub().returns(res);
      req.params = { id: carMockWithId._id };
    })
    it('Success', async () => {
      const carController = new CarController(new CarServiceMock)
      await carController.delete(req, res, next);

      expect((res.status as SinonStub).calledWith(204)).to.be.true;
    })
  })
});
