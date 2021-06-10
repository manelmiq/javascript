let node3 = {data: 3, next : null};
let node2 = {data : 2, next : node3};
let node1 = {data : 1, next : node2};


function reverse(node1){
  let reverted = null, temp;
  let head = node1;
  while(head != null){
    //saving next
    temp = head.next;
    //reversin the node
    head.next = reverted;
    reverted = head;
    //moving to next
    head = temp;
  }
  return reverted;
}

function reverse2(head) {
  let node = head,
    previous = null,
    saveNext;

  while (node) {
    // save next before we overwrite node.next!
    saveNext = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    console.log(previous);
    node = saveNext;
  }

  return previous;
}

console.log(reverse2(node1));