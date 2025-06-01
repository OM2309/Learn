function returnIndex(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

console.log(returnIndex([1, 2, 3, 4, 5, 5], 3));
