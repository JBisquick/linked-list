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

  const pop = () => {
    let lastNode = at(getSize() - 2);
    lastNode.nextNode = null;
    tail = lastNode;
  }

  const contains = (value) => {
    let node = head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }

  const find = (value) => {
    let node = head;
    let count = 0;
    while (node !== null) {
      if (node.value === value) return count;
      node = node.nextNode;
      count += 1;
    }
    return null;
  }

  const toString = () => {
    let node = head;
    let listString = '';
    while (node !== null) {
      listString += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    listString += 'null'
    return listString;
  }

  const insertAt = (index, value) => {
    if (index === 0) {
      prepend(value);
    } else {
      const beforeNode = at(index - 1);
      const afterNode = at(index)
      const newNode = createNode(value, afterNode);
      beforeNode.nextNode = newNode;
    }
  }

  const removeAt = (index) => {
    if (index === 0) {
      const removedNode = head;
      head = removedNode.nextNode;
      removedNode.nextNode = null;
    } else {
      const beforeNode = at(index - 1);
      const afterNode = at(index + 1)
      beforeNode.nextNode = afterNode;
    }
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
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
console.log(list.at(0));
console.log(list.getTail());
console.log(list.getSize());
list.pop();
console.log(list.getTail());
console.log(list.getSize());
console.log(list.contains('marlin'));
console.log(list.contains('mary'));
console.log(list.find('mark'));
console.log(list.find('mary'));
console.log(list.toString());
list.insertAt(2, 'marlin');
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
