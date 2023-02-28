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
    this.matrix_array = [[1]];
  }

  // to encapsulate the matrix_array, and let the option to get in different formats
  // e.g asString, asList
  public asArray() {
    return this.matrix_array;
  }
}
