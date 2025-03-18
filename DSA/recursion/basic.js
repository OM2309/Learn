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
const arr = [1, 2, 3, 4, 5, 6];

function arraySort(arr) {
  if (arr.length === 1) {
    return true; // Base case: agar ek hi element hai, to already sorted hai
  }

  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    return false; // Agar last element chhota hai, to array sorted nahi hai
  }

  return arraySort(arr.slice(0, -1)); // Last element hata ke recursion call
}

console.log(arraySort(arr)); // true
