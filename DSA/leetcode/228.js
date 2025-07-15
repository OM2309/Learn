var summaryRanges = function (nums) {
  const result = [];
  let firstPointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (firstPointer === i) {
        result.push(`${nums[firstPointer]}`);
      } else {
        result.push(`${nums[firstPointer]}->${nums[i]}`);
      }
      firstPointer = i + 1;
    }
  }

  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
