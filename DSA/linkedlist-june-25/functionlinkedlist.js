class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtPosition(data, position) {
    if (position < 0) {
      console.log("Position invalid hai!");
      return;
    }
    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }
    let newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let index = 0;

    while (current !== null && index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    if (index < position) {
      console.log("Position list ke size se bada hai, end mein add kiya.");
      this.insertAtEnd(data);
      return;
    }

    previous.next = newNode;
    newNode.next = current;
  }

  deleteNode(position) {
    if (this.head === null) {
      console.log("List khali hai!");
      return;
    }
    if (position < 0) {
      console.log("Position invalid hai!");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = null;
    let index = 0;
    while (current !== null && index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("Position list ke size se bada hai!");
      return;
    }

    previous.next = current.next;
  }

  display() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  traverse() {
    if (this.head === null) {
      console.log("List khali hai!");
      return 0;
    }
    let current = this.head;
    let length = 0;
    console.log("Traversing list:");
    while (current !== null) {
      console.log(`Node data: ${current.data}`);
      current = current.next;
      length++;
    }
    console.log(`Total nodes in list: ${length}`);
    return length;
  }
}

// Testing the Linked List
let list = new LinkedList();
list.insertAtBeginning(3); // 3 -> null
list.insertAtEnd(4); // 3 -> 4 -> null
list.insertAtEnd(6); // 3 -> 4 -> 6 -> null
list.insertAtPosition(5, 1); // 3 -> 5 -> 4 -> 6 -> null
list.display(); // Output: 3 -> 5 -> 4 -> 6 -> null
