var removeDuplicates = function (nums) {
  let write = 0;

  for (let i = 0; i < nums.length; i++) {
    if (write < 2 || nums[i] > nums[write - 2]) {
      nums[write] = nums[i];
      write++;
    }
  }

  return write;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
