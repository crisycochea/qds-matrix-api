import express from "express";

import { squareMatrixController } from "../../dependencies";
import { isSquareMatrixValidator } from "./squareMatrixValidators";

const squareMatrixRouter = express.Router();

squareMatrixRouter.post(
  "/rotate-counter-clock-wise",
  isSquareMatrixValidator,
  squareMatrixController.rotateSquareMatrixCounterClockWise.bind(
    squareMatrixController
  )
);

export { squareMatrixRouter };
