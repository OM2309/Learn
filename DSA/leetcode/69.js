// var mySqrt = function (x) {
//   if (x === 0) return 0;

//   for (let i = 1; i <= x; i++) {
//     let value = i * i;

//     if (value === x) {
//       return i;
//     }

//     if (value > x) {
//       return i - 1;
//     }
//   }
// };

// console.log(mySqrt(49));
// console.log(mySqrt(8));
// console.log(mySqrt(4));
// console.log(mySqrt(400));

var mySqrt = function (x) {
  if (x < 2) return x;

  let start = 1,
    end = x,
    ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    }

    if (square < x) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};

// console.log(mySqrt(49));
// console.log(mySqrt(8));
// console.log(mySqrt(4));
// console.log(mySqrt(400));
