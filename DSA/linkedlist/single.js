// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }

//   getValue() {
//     return this.value;
//   }
// }

// const node1 = new Node(25);
// console.log(node1.getValue());

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(value) {
//     const newNode = new Node(value);

//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }
// }

// // ✅ Testing the LinkedList
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // ✅ Corrected printList() function
  printList() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `[${current.value}] → `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // ✅ Function to print head, tail, and length for debugging
  printDetails() {
    console.log("Head:", this.head);
    console.log("Tail:", this.tail);
    console.log("Length:", this.length);
  }
}

// ✅ Testing the LinkedList
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

// 🔥 Print the list
list.printList(); // ✅ Output: [10] → [20] → [30] → null
list.printDetails(); // ✅ Prints head, tail, and length
