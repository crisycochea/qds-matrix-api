import { body } from "express-validator";

import NotSquareMatrix from "../../domain/exceptions/NotSquareMatrix";
import SquareMatrix from "../../domain/models/squareMatrix";

export const isSquareNumberMatrixValidator = [
  body("matrix").custom((value) => {
    if (value === undefined) {
      throw new Error("This field is required");
    }
    if (value.some((item: any) => !(item instanceof Array))) {
      throw new Error("Every item in the first array should be arrays");
    }
    value.forEach((subArray: any) => {
      if (subArray.some((item: any) => typeof item !== "number")) {
        throw new Error("All the matrix items have to be numbers");
      }
    });
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
