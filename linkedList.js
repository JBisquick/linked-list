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

  const getHead = () => {
    return head.value;
  };

  const getTail = () => {
    return tail.value;
  };

  return {
    append,
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
list.append('tim');
console.log(list.getHead());
console.log(list.getTail());