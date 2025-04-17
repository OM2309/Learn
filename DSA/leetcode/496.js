var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];

    let found = false;
    let nextGreater = -1;

    // nums2 mein num ka index dhoondo
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] === num) {
        found = true;

        for (let k = j + 1; k < nums2.length; k++) {
          if (nums2[k] > num) {
            nextGreater = nums2[k];
            break;
          }
        }
        break;
      }
    }

    result.push(nextGreater);
  }

  return result;
};
