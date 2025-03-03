// function intersection(num1, num2) {
//   let result = [];
//   for (let i = 0; i < num1.length; i++) {
//     for (let j = 0; j < num2.length; j++) {
//       if (num1[i] === num2[j] && !result.includes(num1[i])) {
//         result.push(num1[i]);
//       }
//     }
//   }

//   return result;
// }

// console.log(intersection([1, 2, 2, 1], [2, 2]));

function intersection(num1, num2) {
  let result = [];
  let obj = {};
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (num1[i] === num2[j] && !obj[num1[i]]) {
        result.push(num1[i]);
        obj[num1[i]] = true;
      }
    }
  }

  return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
