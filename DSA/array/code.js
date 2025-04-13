// const arr = [1, 2, 3, 4, 5];
// const first = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];

//   if (arr.length - 1 === i) {
//     arr[arr.length - 1] = first;
//   }
// }

// console.log(arr);

function rotate(nums, k) {
 k = k % nums.length;

  for (let i = 0; i < k; i++) {
    let copy = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = nums[i + 1];
    }
    nums[nums.length - 1] = copy;
  }

  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
