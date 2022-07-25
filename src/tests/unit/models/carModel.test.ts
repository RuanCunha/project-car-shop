import { expect } from 'chai';
import { stub, SinonStub } from 'sinon';
import { Model } from 'mongoose';
import CarModel from '../../../models/car.model';
import { carMongooseModel } from '../../../models/schemas/CarSchema';
import { Car } from '../../../interfaces/CarInterface';
import { carMock, arrayCarsMock, carMockWithId } from '../mocks'

describe('Car Model', () => {
  describe('Create car', () => {

    before(() => {
      stub(Model, 'create').resolves(carMock);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    })

    it('Success', async () => {
      const carModel = new CarModel(carMongooseModel);

      const result = await carModel.create(carMock);
      expect(result).to.be.deep.equal(carMock);
    });
  });
  
  describe('Read cars', () => {
    
    before(() => {
      stub(Model, 'find').resolves(arrayCarsMock);
    })
    
    after(() => {
      (Model.find as SinonStub).restore();
    })
    
    it('Sucess', async () => {
      const carModel = new CarModel(carMongooseModel);

      const result = await carModel.read();
      expect(result).to.be.deep.equal(arrayCarsMock)
    })
  })

  describe('Read one car', () => {
    
    before(() => {
      stub(Model, 'findOne').resolves(carMockWithId);
    })
    
    after(() => {
      (Model.findOne as SinonStub).restore();
    })
    
    it('Sucess', async () => {
      const carModel = new CarModel(carMongooseModel);

      const result = await carModel.readOne('123456789123456789123456');
      expect(result).to.be.deep.equal(carMockWithId)
    })
  })

  describe('Update car', () => {
    
    before(() => {
      stub(Model, 'findOneAndUpdate').resolves(carMockWithId);
    })
    
    after(() => {
      (Model.findOneAndUpdate as SinonStub).restore();
    })
    
    it('Sucess', async () => {
      const carModel = new CarModel(carMongooseModel);

      const result = await carModel.update('123456789123456789123456', carMock);
      expect(result).to.be.deep.equal(carMockWithId)
    })
  })

  describe('delete car', () => {
    before(() => {
      stub(Model, 'findOneAndDelete').resolves(carMockWithId);
    })
  
    after(() => {
      stub(Model.findOneAndDelete as SinonStub).restore();
    })
  
    it('Success', async () => {
      const carModel = new CarModel(carMongooseModel);
  
      const result = await carModel.delete(carMockWithId._id);
  
      expect(result).to.be.deep.equal(carMockWithId);
    });
  })
});
