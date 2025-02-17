var missingNumber = function (nums) {
  let n = nums.length;

  for (let i = 0; i <= n; i++) {
    let found = false;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) return i; // Return the missing number
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
