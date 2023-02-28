import "./shared/infrastructure/load-env-vars";

import express from "express";

import { squareMatrixRouter } from "./matrix/infrastructure/restApi/squareMatrixRouter";
import { config } from "./shared/infrastructure/config";
import { errorHandler } from "./shared/infrastructure/restApi/errorHandler";

function boostrap() {
  const app = express();

  app.use(express.json());
  app.use(errorHandler);

  const { port } = config.server;

  app.use("/matrix", squareMatrixRouter);
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
