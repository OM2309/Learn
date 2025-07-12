// class Stack {
//   constructor() {
//     this.item = [];
//   }

//   push(s) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "#") {
//         this.pop();
//       }
//       if (s[i] !== "#") {
//         this.item.push(s[i]);
//       }
//     }
//   }

//   pop() {
//     if (this.item.length === 0) {
//       return "Stack khali hai!";
//     }
//     return this.item.pop();
//   }

//   display() {
//     return this.item?.join("");
//   }
// }

// let myStack1 = new Stack();
// let myStack2 = new Stack();
// myStack1.push("ad#c");
// myStack2.push("ad####c");

// if (myStack1.display() === myStack2.display()) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// var backspaceCompare = function (s, t) {
//   const process = (str) => {
//     const stack = [];
//     for (let char of str) {
//       if (char === "#") {
//         stack.pop();
//       } else {
//         stack.push(char);
//       }
//     }
//     return stack.join("");
//   };

//   return process(s) === process(t);
// };

let MyStack = function () {
  this.item = [];
};

MyStack.prototype.push = function (x) {
  this.item.push(x);
};
MyStack.prototype.pop = function (x) {
  this.item.pop();
};
MyStack.prototype.top = function () {
  if (this.item.length > 0) {
    return this.item.pop();
  }
};
