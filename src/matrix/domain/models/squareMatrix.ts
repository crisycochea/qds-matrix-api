import NotSquareMatrix from "../exceptions/NotSquareMatrix";

export default class SquareMatrix {
  private matrix_array: Array<Array<number>>;
  constructor(matrix_array: Array<Array<number>>) {
    const matrixLength = matrix_array.length;
    const subListsWithSameLength = matrix_array.every(
      (subList) => subList.length === matrixLength
    );
    if (!subListsWithSameLength) {
      throw new NotSquareMatrix();
    }
    this.matrix_array = matrix_array;
  }

  public rotateCounterClockWise() {
    this.transpose();
    this.rotateHorizontalRespectTheMiddle();
  }

  private rotateHorizontalRespectTheMiddle() {
    this.matrix_array = this.matrix_array.reverse();
  }

  private transpose() {
    for (let i = 0; i < this.matrix_array.length; i++) {
      for (let j = 0; j < i; j++) {
        const tmp = this.matrix_array[i][j];
        this.matrix_array[i][j] = this.matrix_array[j][i];
        this.matrix_array[j][i] = tmp;
      }
    }
  }

  // to encapsulate the matrix_array, and let the option to get in different formats
  // e.g asString, asSimpleArray, asAnotherClass
  public asArray() {
    return this.matrix_array;
  }
}
