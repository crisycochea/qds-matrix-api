import { NextFunction, Request, Response } from "express";

import { validate } from "../../../shared/infrastructure/restApi/decorators/validate";
import { RotateSquareMatrixUseCase } from "../../application/rotateSquareMatrixUseCase";

export class SquareMatrixController {
  constructor(
    private readonly rotateSquareMatrixUseCase: RotateSquareMatrixUseCase
  ) {}

  @validate
  async rotateSquareMatrixCounterClockWise(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const matrixArray = req.body.matrix;
    try {
      const rotatedMatrix = await this.rotateSquareMatrixUseCase.run(
        matrixArray
      );
      res.status(200).send(rotatedMatrix);
    } catch (e) {
      next(e);
    }
  }
}
