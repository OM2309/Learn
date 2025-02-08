// Reverse a String using Stack

class ReverseString {
  constructor() {
    this.stack = [];
  }

 
  reverse(str) {
    for (let char of str) {
      this.stack.push(char);
    }

    let reversedStr = "";
    while (this.stack.length > 0) {
      reversedStr += this.stack.pop();
    }

    return reversedStr;
  }
}

const reverseStringStack = new ReverseString();

console.log(reverseStringStack.reverse("hello"));
console.log(reverseStringStack.reverse("world"));
