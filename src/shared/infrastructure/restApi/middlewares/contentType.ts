import { header } from "express-validator";

export const contentTypeValidator = [
  header("Content-Type")
    .equals("application/json")
    .withMessage(
      "Invalid content type. You should use Content-Type: application/json"
    ),
];
