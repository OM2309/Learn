var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;

  while (left < right) {
    let Cwidth = right - left;
    let Cheight = Math.min(height[left], height[right]);
    let area = Cwidth * Cheight;

    if (area > max) {
      max = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
