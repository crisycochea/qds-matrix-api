import SquareMatrix from "../domain/models/squareMatrix";

export class RotateSquareMatrixUseCase {
  run(matrixArray: Array<Array<number>>): Array<Array<number>> {
    const squareMatrix = new SquareMatrix(matrixArray);
    squareMatrix.rotateCounterClockWise();
    return squareMatrix.asArray();
  }
}
