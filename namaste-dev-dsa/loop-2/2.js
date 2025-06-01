function countNegative(arr) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      count++;
    }
  }

  return count;
}

console.log(countNegative([1, 2, -4, 5, 6, -2]));
