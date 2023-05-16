var swapPairs = function(head) {
  // base case
  if (head === null || head.next === null) return head;
  let temp = head.next;
  head.next = temp.next;
  temp.next = head;
  head.next = swapPairs(head.next);
  return temp;
};