import { NextFunction, Request, Response } from "express";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).send({ status: 400, message: error.message });
  }
  next();
}
