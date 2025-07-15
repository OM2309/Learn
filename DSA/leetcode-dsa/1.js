const arr = [3, 0, 1, 4, 5, 2, 6];

function func(arr) {
  let result = 0;
  let firstPointer = 0;
  let secondPointer = 1;

  while (secondPointer < arr.length) {
    if (arr[firstPointer] > arr[secondPointer]) {
      const sub = arr[firstPointer] - arr[secondPointer];
      result = result + sub;
    } else {
      arr[firstPointer] = arr[secondPointer];
    }

    secondPointer++;
  }

  return result;
}

console.log(func(arr));
