// let num = 12543;
// let sum = 0;

// while (num) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }

// console.log(sum);

function sumDigits(num) {
  if (num === 0) return 0;
  return (num % 10) + sumDigits(Math.floor(num / 10));
}

console.log(sumDigits(12543));
