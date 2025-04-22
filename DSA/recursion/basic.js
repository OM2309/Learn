// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// function factorial(n) {
//   console.log(`CALL: factorial(${n})`); // Function call hone par yeh print hoga

//   if (n === 1) {
//     console.log(`RETURN: factorial(${n}) = 1`); // Base case reached
//     return 1;
//   }

//   let result = n * factorial(n - 1);

//   console.log(
//     `RETURN: factorial(${n}) = ${n} * factorial(${n - 1}) = ${result}`
//   ); // Value return hone par print hoga

//   return result;
// }

// console.log("Final Output:", factorial(5));
// const arr = [1, 2, 3, 4, 5, 6];

// function arraySort(arr) {
//   if (arr.length === 1) {
//     return true;
//   }

//   if (arr[arr.length - 1] < arr[arr.length - 2]) {
//     return false;
//   }

//   return arraySort(arr.slice(0, -1));
// }

// console.log(arraySort(arr));

// sum of n numbers

// function naturalNumbers(value) {
//   if (value === 1) return 1;

//   return value + naturalNumbers(value - 1);
// }

// console.log(naturalNumbers(5));
