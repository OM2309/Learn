function firstOccurencesOccur(array, target) {
  let start = 0;
  let end = array.length - 1;

  let ans = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      ans = mid;
      end = mid - 1;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
}

console.log(firstOccurencesOccur([1, 2, 3, 4, 4, 5, 4], 2));
