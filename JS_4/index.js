function expamle(arr, n) {
  const returnedArr = [];
  arr.find((number, i, arr) => {
    arr.find((iterNumber, j) => {
      if (number + iterNumber == n && i != j) {
        returnedArr.push(i, j);
        arr.length = i + 1;
      }
    });
  });
  return returnedArr;
}
