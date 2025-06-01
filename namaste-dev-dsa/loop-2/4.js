function secondLargest(arr) {
  let sortArray = arr.sort((a, b) => b - a);
  let firstMax = arr[0];
  let secondMax = arr[1];

  return secondMax;
}

console.log(secondLargest([1, 2, 3, 4, 5, 6, 7]));
