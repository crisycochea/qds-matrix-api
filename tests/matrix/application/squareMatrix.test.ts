import NotSquareMatrix from "../../../src/matrix/domain/exceptions/NotSquareMatrix";
import SquareMatrix from "../../../src/matrix/domain/models/squareMatrix";

describe("RotateMatrix", () => {
  describe("throw error when instancing a not square matrix", () => {
    it("should throw error", async () => {
      const matrixArray = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [0, 1, 2],
      ];
      expect(() => {
        new SquareMatrix(matrixArray);
      }).toThrowError(NotSquareMatrix);
    });
  });
  describe("rotateEvenSizeMatrix", () => {
    it("should return [[2,4],[1,3]]", async () => {
      const matrixArray = [
        [1, 2],
        [3, 4],
      ];
      const matrix = new SquareMatrix(matrixArray);

      const counterClockWiseRotatedMatrixArray = [
        [2, 4],
        [1, 3],
      ];
      matrix.rotateCounterClockWise();
      expect(JSON.stringify(matrix.asArray())).toStrictEqual(
        JSON.stringify(counterClockWiseRotatedMatrixArray)
      );
    });

    describe("rotateOddSizeMatrix", () => {
      it("should return [ [3,6,9], [2,5,8], [1,4,7] ]", async () => {
        const matrixArray = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ];
        const matrix = new SquareMatrix(matrixArray);

        const counterClockWiseRotatedMatrixArray = [
          [3, 6, 9],
          [2, 5, 8],
          [1, 4, 7],
        ];
        matrix.rotateCounterClockWise();
        expect(JSON.stringify(matrix.asArray())).toStrictEqual(
          JSON.stringify(counterClockWiseRotatedMatrixArray)
        );
      });
    });
  });
});
