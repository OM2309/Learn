// var searchRange = function (nums, target) {
//   if (nums.length === 0) return [-1, -1];

//   let start = 0;
//   let end = nums.length - 1;
//   let result = [];

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (nums[mid] === target) {
//       result.push(mid);
//     } else if (nums[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return result;
// };

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  const findBoundary = (findFirst) => {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        index = mid;
        if (findFirst) {
          end = mid - 1; // Continue searching left
        } else {
          start = mid + 1; // Continue searching right
        }
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return index;
  };

  let firstIndex = findBoundary(true);
  let lastIndex = findBoundary(false);

  return [firstIndex, lastIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
