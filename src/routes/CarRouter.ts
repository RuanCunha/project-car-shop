import { Router } from 'express';
import CarController from '../controllers/car.controller';

const CarRouter = Router();

const carController = new CarController();

CarRouter.post(
  '/cars',
  (req, res, next) => carController.create(req, res, next),
);
CarRouter.get(
  '/cars',
  (req, res, next) => carController.read(req, res, next),
);
CarRouter.get(
  '/cars/:id',
  (req, res, next) => carController.readOne(req, res, next),
);

export default CarRouter;
