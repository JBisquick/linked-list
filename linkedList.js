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

  const getSize = () => {
    let count = 0;
    let countNode = head;
    while (countNode !== null) {
      countNode = countNode.nextNode;
      count += 1;
    }
    return count;
  };

  const getHead = () => {
    if (head === null) return null;
    return head.value;
  };

  const getTail = () => {
    if (tail === null) return null;
    return tail.value;
  };

  const at = (index) => {
    let count = 0;
    let node = head;
    while (count < index) {
      node = node.nextNode;
      count += 1;
    }
    return node;
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at
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
console.log(list.at(1));
console.log(list.at(2));
console.log(list.getTail());
console.log(list.getSize());