import { body } from "express-validator";

import NotSquareMatrix from "../../domain/exceptions/NotSquareMatrix";
import SquareMatrix from "../../domain/models/squareMatrix";

export const isSquareMatrixValidator = [
  body("matrix").custom((value) => {
    if (value === undefined) {
      throw new Error("This field is required");
    }
    try {
      new SquareMatrix(value);
      return true;
    } catch (error) {
      if (error instanceof NotSquareMatrix) {
        throw new Error(error.message);
      } else {
        throw new Error("An unexpected error happened during validations");
      }
    }
  }),
];
