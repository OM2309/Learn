function spiralOrder(matrix) {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  let result = [];

  while (top <= bottom && left <= bottom) {
    // left to right
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }

    top++;

    // top to bottom
    for (let j = right; j < bottom; j++) {
      const element = array[j];
    }
  }
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
