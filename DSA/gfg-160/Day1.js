function getSecondLargest(arr) {
  const revarr = arr.sort((a, b) => b - a);

  for (let i = 1; i < revarr.length; i++) {
    if (revarr[i] < revarr[0]) {
      return revarr[i];
    }
  }

  return -1;
}

// console.log(getSecondLargest([12, 35, 1, 10, 34, 1]));
// console.log(getSecondLargest([10, 10, 10, 8, 8, 7]));
console.log(getSecondLargest([10, 10, 10]));
