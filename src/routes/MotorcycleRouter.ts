import { Router } from 'express';
import MotoController from '../controllers/moto.controller';

const MotoRouter = Router();

const motoController = new MotoController();

const ID_MOTO = '/motorcycles/:id';

MotoRouter.post(
  '/motorcycles',
  (req, res, next) => motoController.create(req, res, next),
);
MotoRouter.get(
  '/motorcycles',
  (req, res, next) => motoController.read(req, res, next),
);
MotoRouter.get(
  ID_MOTO,
  (req, res, next) => motoController.readOne(req, res, next),
);
MotoRouter.put(
  ID_MOTO,
  (req, res, next) => motoController.update(req, res, next),
);
MotoRouter.delete(
  ID_MOTO,
  (req, res, next) => motoController.delete(req, res, next),
);

export default MotoRouter;
