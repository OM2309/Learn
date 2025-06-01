function largestNumber(arr) {
  let maxNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

console.log(largestNumber([1, 2, 3, 4, 5, 6]));
