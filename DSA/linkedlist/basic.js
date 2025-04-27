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

  insertAt(position, data) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    if (position === 0) {
      this.addFirst(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let index = 0;

    while (current !== null && index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    if (previous !== null) {
      previous.next = newNode;
      newNode.next = current;
    } else {
      console.log("Position out of range");
    }
  }

  deleteFirst() {
    if (this.head === null) {
      console.log("List is already empty");
      return;
    }
    this.head = this.head.next;
  }

  deleteLast() {
    if (this.head === null) {
      console.log("List is already empty");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  // 6️⃣ Delete Node at Specific Position
  deleteAt(position) {
    if (position < 0) {
      console.log("Invalid position");
      return;
    }

    if (this.head === null) {
      console.log("List is already empty");
      return;
    }

    if (position === 0) {
      this.deleteFirst();
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

    if (current !== null) {
      previous.next = current.next;
    } else {
      console.log("Position out of range");
    }
  }

  // 7️⃣ Print the Linked List
  printList() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // 8️⃣ Find Length of Linked List
  length() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    console.log("Length of LinkedList: " + count);
    return count;
  }

  // 9️⃣ Reverse the Linked List
  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
}

// 💥 Testing
const list = new LinkedList();
list.addFirst(10);
list.addFirst(20);
list.addLast(5);
list.insertAt(1, 15); // Position 1 pe 15 insert
list.printList(); // 20 -> 15 -> 10 -> 5 -> null

list.deleteFirst();
list.printList(); // 15 -> 10 -> 5 -> null

list.deleteLast();
list.printList(); // 15 -> 10 -> null

list.deleteAt(1);
list.printList(); // 15 -> null

list.length(); // 1

list.addLast(25);
list.addLast(35);
list.addLast(45);
list.printList(); // 15 -> 25 -> 35 -> 45 -> null

list.reverse();
list.printList(); // 45 -> 35 -> 25 -> 15 -> null
