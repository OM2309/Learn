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
  let q = [];
  let i = 0;
  let j = 0;
  while (j < size) {
    if (arr[j] < 0) {
      q.push(arr[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else {
      if (q.length > 0) {
        result.push(q[0]);
      } else {
        result.push(0);
      }
      if (arr[i] === q[0]) {
        q.shift();
      }

      i++;
      j++;
    }
  }
}

function isNegative(num) {
  return num < 0;
}

console.log(firstNegative([1, -2, 3, -4, -5, 6, 7], 3));
