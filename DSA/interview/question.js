// Given an array of integers, find the smallest and largest element in the array.

// Input: arr[] = {3, 5, 1, 2, 4, 8, 7}
// Output: Smallest: 1, Largest: 8

// function findMinMax(arr) {
//   let largestValue = -Infinity;
//   let smallestValue = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestValue) {
//       largestValue = arr[i];
//     }

//     if (arr[i] < smallestValue) {
//       smallestValue = arr[i];
//     }
//   }

//   return { largestValue, smallestValue };
// }

// console.log(findMinMax([7, 6, 3, 4, 5]));

// Given an array of integers, write a function to reverse the array without using any extra space (in-place reversal).

// let arr = [1, 2, 4, 5, 6, 7];

// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
//   }

//   return arr;
// }

// console.log(reverseArray(arr));

// function secondLargest(arr) {
//   let firstLargestElement = -Infinity;
//   let secondLargestElement = -Infinity;
//   let firstSmallestElement = Infinity;
//   let secondSmallestElement = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargestElement) {
//       secondLargestElement = firstLargestElement;
//       firstLargestElement = arr[i];
//     } else if (
//       arr[i] > secondLargestElement &&
//       arr[i] !== firstLargestElement
//     ) {
//       secondLargestElement = arr[i];
//     }

//     if (arr[i] < firstSmallestElement) {
//       secondSmallestElement = firstSmallestElement;
//       firstSmallestElement = arr[i];
//     } else if (
//       arr[i] < secondSmallestElement &&
//       arr[i] !== firstSmallestElement
//     ) {
//       secondSmallestElement = arr[i];
//     }
//   }

//   return {
//     firstLargestElement,
//     secondLargestElement,
//     firstSmallestElement,
//     secondSmallestElement,
//   };
// }

// console.log(secondLargest([1, 2, 4, 5, 6, 3, 6]));

// function checkMissingNumber(array) {
//   let missingNumber = [];
//   for (let i = 0; i < array.length + 1; i++) {
//     if (array[i] !== i + 1) {
//       missingNumber.push(i + 1);
//     }
//   }

//   return missingNumber;
// }

// console.log(checkMissingNumber([1, 2, 4, 5, 6, 7]));
let arr = [1, 2, 3, 4, 6, 7];

function insertArrayValue(arr, target, value) {
  for (let i = arr.length; i > target; i--) {
    arr[i] = arr[i - 1];
  }

  arr[target] = value;
}

insertArrayValue(arr, 4, 5);

console.log(arr);
