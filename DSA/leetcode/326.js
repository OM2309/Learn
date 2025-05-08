var isPowerOfThree = function (n) {
  if (n === 3) return true;
  if (n < 3) return false;

  return isPowerOfThree(n / 3);
};

console.log(isPowerOfThree(-1));
