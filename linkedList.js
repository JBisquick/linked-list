function createLinkedList () {
  let head = null;
  let tail = null;

  const append = (value) => {
    const newNode = createNode(value);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  }; 

  const prepend = (value) => {
    const newNode = createNode(value);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };

  const getHead = () => {
    return head.value;
  };

  const getTail = () => {
    return tail.value;
  };

  return {
    append,
    prepend,
    getHead,
    getTail
  };
}

function createNode (value = undefined, nextNode = null) {
  // Stop value from becoming null to 
  // prevent breaking code in above factory function
  if (value === null) {
    value = undefined;
  }

  return {
    value,
    nextNode
  };
}

let list = createLinkedList();
list.append('bob');
list.append('mary');
list.prepend('mark');
list.append('tim');
console.log(list.getHead());
console.log(list.getTail());