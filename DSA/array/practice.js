// left rotation by one element

const arr = [1, 2, 3, 4, 5];
const firstIndexCopy = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr[arr.length - 1] = firstIndexCopy;

console.log(arr);
