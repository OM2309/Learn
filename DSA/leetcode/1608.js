var specialArray = function (nums) {
  let n = nums.length;

  for (let x = 0; x <= n; x++) {
    let count = 0;

    for (let num of nums) {
      if (num >= x) {
        count++;
      }
    }

    if (count === x) {
      return x;
    }
  }

  return -1;
};
