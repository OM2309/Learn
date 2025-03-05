const arr = [1, 2, 2, 2, 3, 4, 5];

function occurences(arr, key) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      ++count;
      obj[arr[i]] = count;
    }
  }

  return obj;
}

console.log(occurences(arr, 2));
