import NotSquareMatrix from "../exceptions/NotSquareMatrix";

export default class SquareMatrix {
  private matrixArray: Array<Array<number>>;
  constructor(matrixArray: Array<Array<number>>) {
    const matrixLength = matrixArray.length;
    const subListsWithSameLength = matrixArray.every(
      (subList) => subList.length === matrixLength
    );
    if (!subListsWithSameLength) {
      throw new NotSquareMatrix();
    }
    this.matrixArray = matrixArray;
  }

  public rotateCounterClockWise() {
    this.transpose();
    this.rotateHorizontalRespectTheMiddle();
  }

  private rotateHorizontalRespectTheMiddle() {
    this.matrixArray = this.matrixArray.reverse();
  }

  private transpose() {
    for (let i = 0; i < this.matrixArray.length; i++) {
      for (let j = 0; j < i; j++) {
        const tmp = this.matrixArray[i][j];
        this.matrixArray[i][j] = this.matrixArray[j][i];
        this.matrixArray[j][i] = tmp;
      }
    }
  }

  // to encapsulate the matrixArray, and let the option to get in different formats
  // e.g asString, asSimpleArray, asAnotherClass
  public asArray() {
    return this.matrixArray;
  }
}
