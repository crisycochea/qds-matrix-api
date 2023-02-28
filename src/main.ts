import "./shared/infrastructure/load-env-vars";

import express from "express";

import { squareMatrixRouter } from "./matrix/infrastructure/restApi/squareMatrixRouter";
import { config } from "./shared/infrastructure/config";
import { contentTypeValidator } from "./shared/infrastructure/restApi/middlewares/contentType";
import { errorHandler } from "./shared/infrastructure/restApi/middlewares/errorHandler";

function boostrap() {
  const app = express();

  app.use(contentTypeValidator);
  app.use(express.json());
  app.use(errorHandler);

  const { port } = config.server;

  app.use("/square-matrices", squareMatrixRouter);
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
