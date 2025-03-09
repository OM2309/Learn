// const arr = [1, 2, 2, 2, 3, 4, 5];

// function occurences(arr, key) {
//   let obj = {};
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === key) {
//       ++count;
//       obj[arr[i]] = count;
//     }
//   }

//   return obj;
// }

// console.log(occurences(arr, 2));

// Input: arr = [1, 2, 2, 2, 3, 4, 5], key = 2
// Output: 1  (because the first occurrence of 2 is at index 1)

function binarySearchOccurences(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === key) {
      result = mid;
      end = mid - 1;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}

console.log(binarySearchOccurences([1, 2, 2, 2, 2, 4, 5, 6], 2));
