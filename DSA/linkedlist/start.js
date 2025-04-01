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

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }

    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid Index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;

      return;
    }
  }
}

const createLinkedList = new LinkedList();
createLinkedList.addFirst(10);
createLinkedList.addFirst(20);
createLinkedList.addFirst(30);

createLinkedList.printList();
