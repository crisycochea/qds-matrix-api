import express from "express";

import { squareMatrixController } from "../../dependencies";
import { isSquareNumberMatrixValidator } from "./squareMatrixValidators";

const squareMatrixRouter = express.Router();

squareMatrixRouter.post(
  "/rotate-counter-clock-wise",
  isSquareNumberMatrixValidator,
  squareMatrixController.rotateSquareMatrixCounterClockWise.bind(
    squareMatrixController
  )
);

export { squareMatrixRouter };
