function spiralOrder(matrix) {
  if (!matrix.length || !matrix[0].length) return [];

  let result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 🔹 Step 1: Traverse from Left to Right (Top row)
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Top boundary shrink

    // 🔹 Step 2: Traverse from Top to Bottom (Right column)
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Right boundary shrink

    // 🔹 Step 3: Traverse from Right to Left (Bottom row)
    if (top <= bottom) {
      // Check to prevent duplicate row traversal
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Bottom boundary shrink
    }

    // 🔹 Step 4: Traverse from Bottom to Top (Left column)
    if (left <= right) {
      // Check to prevent duplicate column traversal
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++; // Left boundary shrink
    }
  }

  return result;
}

// 🔥 Test Case
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
