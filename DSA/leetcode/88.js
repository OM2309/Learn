// function mergeArray(nums1, m, nums2, n) {
//   let p = m - 1;
//   let q = n - 1;
//   let r = m + n - 1;

//   while (q >= 0) {
//     if (nums1[p] < nums2[q]) {
//       nums1[r] = nums2[q];
//       q--;
//     } else if (nums1[p] > nums2[q]) {
//       nums1[r] = nums1[p];
//       p--;
//     } else if (nums1[p] === nums2[q]) {
//       nums1[r] = nums2[q];
//       q--;
//     } else if (n === 1 && m === 0) {
//     }

//     r--;
//   }

//   return nums1;
// }

// console.log(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// // console.log(mergeArray([0], 0, [1], 1));

var merge = function (nums1, m, nums2, n) {
  let p = m - 1;
  let q = n - 1;
  let r = m + n - 1;

  while (q >= 0) {
    if (p >= 0 && nums1[p] > nums2[q]) {
      nums1[r] = nums1[p];
      p--;
    } else {
      nums1[r] = nums2[q];
      q--;
    }
    r--;
  }

  return nums1;
};
