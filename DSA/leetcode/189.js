// var rotate = function (nums, k) {
//   let left = 0;
//   let right = nums.length - 1;
//   let count = 0;

//   let rotateArr = [];
//   let anotherArr = [];
//   let FinalArr = [];

//   while (count < k) {
//     let temp = nums[left];
//     nums[left] = nums[right];
//     nums[right] = temp;
//     rotateArr.push(nums[left]);

//     left++;
//     right--;
//     count++;

//     // console.log(nums);
//   }

//   rotateArr.sort();

//   for (let i = nums.length - 1; i >= k; i--) {
//     anotherArr.push(nums[i]);
//   }

//   FinalArr = [...rotateArr, ...anotherArr];

//   return FinalArr;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));

// function rotate(nums, k) {
//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       let temp = nums[nums.length - 1];
//       nums[nums.length - 1] = nums[]
//     }
//   }
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
