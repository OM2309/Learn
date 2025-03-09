// function totalOccurences(arr) {
//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]]++;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   return obj;
// }

// console.log(totalOccurences([1, 2, 2, 4, 54, 4, 3, 4, 54]));

function totalOccurences(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    console.log(obj[arr[i]]);
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  return obj;
}

console.log(totalOccurences([1, 2, 2, 4, 54, 4, 3, 4, 54]));
