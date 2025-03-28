// function pushZeros(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] !== 0) {
//       left++;
//     } else if (arr[right] === 0) {
//       right--;
//     } else if (arr[left] === 0 && arr[right] !== 0) {
//       let temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//       right--;
//     }
//   }

//   return arr;
// }

// console.log(pushZeros([1, 2, 0, 4, 3, 0, 5, 0]));

function pushZeros(arr) {
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
    }
  }

  return arr;
}

console.log(pushZeros([1, 2, 0, 4, 3, 0, 5, 0]));
