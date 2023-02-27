export default class SquareMatrix {
  matrix_array: Array<Array<number>>;
  constructor(matrix_array: Array<Array<number>>) {
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
