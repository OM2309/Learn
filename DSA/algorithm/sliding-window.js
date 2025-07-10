// function maxslidingWindow(arr, k) {
//   let max = -Infinity;
//   let size = arr.length;
//   const result = [];

//   let i = 0;

//   let j = 0;
//   while (j < size) {
//     if (arr[j] > max) {
//       max = arr[j];
//     }
//     if (j - i + 1 < k) {
//       j++;
//     } else {
//       if (arr[i] > arr[j]) {
//         result.push(arr[i]);
//       }
//       if (arr[j] > arr[i]) {
//         result.push(arr[j]);
//       }
//       i++;
//       j++;
//     }

//     return result;
//   }
// }

// console.log(maxslidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// function slidingWindow(arr, k) {
//   let sum = 0;
//   let max = -Infinity;
//   let size = arr.length;

//   let i = 0;

//   let j = 0;
//   while (j < size) {
//     sum = sum + arr[j];
//     if (j - i + 1 < k) {
//       j++;
//     } else {
//       max = Math.max(max, sum);
//       sum = sum - arr[i];
//       i++;
//       j++;
//     }
//   }

//   return { max, sum };
// }

// console.log(slidingWindow([1, 2, 3, 4, 5, 6, 7], 3));

function firstNegative(arr, k) {
  let result = [];
  let q = []; // Queue to store negative numbers
  let i = 0; // Start of the window
  let j = 0; // End of the window

  while (j < arr.length) {
    // Add negative numbers to the queue
    if (arr[j] < 0) {
      q.push(arr[j]);
    }

    // Check if we have reached the window size
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // If queue is not empty, the first element is the first negative number
      if (q.length > 0) {
        result.push(q[0]);
      } else {
        result.push(0);
      }

      // Remove the element at the start of the window if it was negative
      if (arr[i] === q[0]) {
        q.shift();
      }

      // Slide the window
      i++;
      j++;
    }
  }

  return result;
}

// Test the function
console.log(firstNegative([1, -2, 3, -4, -5, 6, 7], 3));
