import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export default function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: 'internal error' });
}
