class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    let newNode = new Node(val);
    let current = this.head;
    let prev = null;
    let count = 0;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    prev.next = newNode;
    this.size++;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.val + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example usage
const LinkedListCreate = new LinkedList();
LinkedListCreate.addAtHead(10);
LinkedListCreate.addAtTail(20);
LinkedListCreate.addAtIndex(1, 15);
LinkedListCreate.printList(); // Output: 10 -> 15 -> 20 -> null
