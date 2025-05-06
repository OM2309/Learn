var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length - 1; // Step 1: Set the range [1, n]

  while (left < right) {
    let mid = Math.floor((left + right) / 2); // Step 2: Find mid point
    let count = 0;

    // Step 3: Count how many numbers are <= mid
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    // Step 4: Adjust the search range
    if (count > mid) {
      // If count is more than mid, duplicate is in the left half
      right = mid; // So we update right
    } else {
      // Else, duplicate is in the right half
      left = mid + 1; // So we update left
    }
  }

  // Step 5: When left == right, we have found the duplicate number
  return left; // Return the duplicate number
};

// Test examples
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
