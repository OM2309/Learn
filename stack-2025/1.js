class Stack {
  constructor() {
    this.items = [];
  }

  // Push: Item add karo
  push(item) {
    this.items.push(item);
  }

  // Pop: Item nikaalo
  pop() {
    if (this.isEmpty()) {
      return "Stack khali hai!";
    }
    return this.items.pop();
  }

  // Peek: Top item dekho
  peek() {
    if (this.isEmpty()) {
      return "Stack khali hai!";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check karo khali hai ya nahi
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Kitne items hain
  size() {
    return this.items.length;
  }
}

// Use karo
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.peek()); // Output: 30
console.log(myStack.pop()); // Output: 30
console.log(myStack.size()); // Output: 2
console.log(myStack.isEmpty()); // Output: false
