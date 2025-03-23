// const uniqueNumbers = new Set([10, 20, 30, 40, 40, 30, 20]);

// for (let num of uniqueNumbers) {
//   console.log(num);
// }

// const userMap = new Map([
//   ["name", "John"],
//   ["age", 25],
//   ["city", "New York"],
// ]);

// for (let [key, value] of userMap) {
//   console.log(`${key}: ${value}`);
// }

// const mySet = new Set();
// console.log(mySet.size);
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);
// console.log(mySet.size);
// console.log(mySet);
// console.log(...mySet); // spread a value
// console.log([...mySet]); // convert an array

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   let row = arr[i]; // row is an array
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]); // Access each element correctly
//   }
// }

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let j = 0; j < arr[0].length; j++) {
//   for (let i = 0; i < arr.length; i++) {
//     // Iterate over rows
//     console.log(arr[i][j]); // Print elements column-wise
//   }
// }
