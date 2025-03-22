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

const mySet = new Set();
console.log(mySet.size);
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log(mySet.size);
console.log(mySet);
console.log(...mySet); // spread a value
console.log([...mySet]); // convert an array
