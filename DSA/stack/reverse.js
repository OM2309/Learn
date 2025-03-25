class ReveseStringStack {
  constructor() {
    this.stack = [];
  }

  reverse(str) {
    let returnRev = "";
    for (let s of str) {
      this.stack.push(s);

      while (this.stack.length) {
        returnRev += this.stack.pop();
      }
    }

    return returnRev;
  }
}

const reverseStringStack = new ReveseStringStack();
console.log(reverseStringStack.reverse("Hello"));
