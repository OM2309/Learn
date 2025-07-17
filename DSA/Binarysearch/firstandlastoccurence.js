function firstAndLast(arr, val) {
  
  function findFirst(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === val) {
        result = mid;
        end = mid - 1;
      } else if (arr[mid] > val) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return result;
  }

  function findLast(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === val) {
        result = mid;
        start = mid + 1;
      } else if (arr[mid] > val) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return result;
  }

  const firstIndex = findFirst(arr, val);
  const lastIndex = findLast(arr, val);
  const occur = lastIndex - firstIndex + 1;

  return occur;
}

console.log(firstAndLast([2, 4, 10, 10, 10, 18, 20], 10));
