const array = [1, 5, 6, 8, 9, 10];
function BinarySearch(array, key) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === key) {
      return 1;
    }

    if (array[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(BinarySearch(array, 9));
console.log(BinarySearch(array, 7));
