const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number "));

// for (let i = 0; i < n; i++) {
//   process.stdout.write("*");
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 65; i <= n; i++) {
//   for (let j = 65; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(j));
//   }
//   console.log();
// }

// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
