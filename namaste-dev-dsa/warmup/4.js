// function secondLargest(arr) {
//   let sortArray = arr.sort((a, b) => b - a);
//   let firstMax = arr[0];
//   let secondMax = arr[1];

//   return secondMax;
// }

// console.log(secondLargest([1, 2, 3, 4, 5, 6, 7]));

// function secondLargest(arr) {
//   let firstLargest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (arr[i] > secondLargest  ) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// console.log(secondLargest([1, 2, 3, 4, 5, 6, 6]));

function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargest([1, 2, 3, 4, 5, 6, 6]));
