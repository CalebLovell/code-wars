function findNextSquare(sq) {
  const squareRoot = Math.sqrt(sq);
  if (Number.isInteger(squareRoot)) {
    return Math.pow(squareRoot + 1, 2);
  } else {
    return -1;
  }
}
