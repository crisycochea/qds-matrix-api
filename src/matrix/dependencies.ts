import { RotateSquareMatrixUseCase } from "./application/rotateSquareMatrixUseCase";
import { SquareMatrixController } from "./infrastructure/restApi/squareMatrixController";

export const rotateSquareMatrixUseCase = new RotateSquareMatrixUseCase();
export const squareMatrixController = new SquareMatrixController(
  rotateSquareMatrixUseCase
);
