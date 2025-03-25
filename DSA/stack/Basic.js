class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.stack.pop;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.stack(this.size() - 1);
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(20);
stack.push(25);
console.log(stack.size());
