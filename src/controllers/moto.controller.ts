import { Request, Response, NextFunction } from 'express';
import { MotoControllerInterface } from '../interfaces/MotoControllerInterface';
import { MotoServiceInterface } from '../interfaces/MotoServiceInterface';
import MotoService from '../services/moto.service';

const ID_SIZE = { error: 'Id must have 24 hexadecimal characters' };
const NOT_FOUND = { error: 'Object not found' };

export default class MotoController implements MotoControllerInterface {
  private _motoService: MotoServiceInterface;

  constructor(motoService: MotoServiceInterface = new MotoService()) {
    this._motoService = motoService;
  }

  async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const {
        model, year, color, buyValue, category, engineCapacity } = req.body;
      const motoCreated = await this._motoService
        .create({ model, year, color, buyValue, category, engineCapacity });
      return res.status(201).json(motoCreated);
    } catch (error) {
      next(error);
    }
  }

  async read(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const motorcycles = await this._motoService.read();
      return res.status(200).json(motorcycles);
    } catch (error) {
      next(error);
    }
  }

  async readOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      if (id.length < 24) {
        return res
          .status(400)
          .json(ID_SIZE); 
      }
      const motorcycle = await this._motoService.readOne(id);
      if (!motorcycle) return res.status(404).json(NOT_FOUND);
      return res.status(200).json(motorcycle);
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      if (id.length < 24) return res.status(400).json(ID_SIZE);
      if (!req.body) return res.status(400);
      const {
        model, year, color, buyValue, category, engineCapacity } = req.body;
      const motorcycle = await this._motoService
        .update(id, { model, year, color, buyValue, category, engineCapacity });
      if (!motorcycle) return res.status(404).json(NOT_FOUND);
      return res.status(200).json(motorcycle);
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    try {
      const { id } = req.params;
      if (id.length < 24) {
        return res
          .status(400)
          .json(ID_SIZE); 
      }
      const motorcycle = await this._motoService.delete(id);
      if (!motorcycle) return res.status(404).json(NOT_FOUND);
      return res.status(204).json(motorcycle);
    } catch (error) {
      next(error);
    }
  }
}
