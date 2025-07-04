var deleteDuplicates = function (head) {
  // Handle empty list or single node
  if (!head || !head.next) return head;

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
