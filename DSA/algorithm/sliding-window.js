function slidingWindow(arr, k) {
  let sum = 0;
  let max = -Infinity;
  let size = arr.length;
  let i = 0;
  let j = 0;
  while (j < size) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      j++;
    } else {
      max = Math.max(max, sum);
      sum = sum - arr[i];
      i++;
      j++;
    }
  }

  return { max, sum };
}

console.log(slidingWindow([1, 2, 3, 4, 5, 6, 7], 3));
