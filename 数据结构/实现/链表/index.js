class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let head = new Node('head');
    this.head = head;
    this.length = 0;
  }
  findIndex(element) {
    let currNode = this.head;
    let index = -1;
    while (currNode) {
      if (element === currNode.element) {
        return index + 1;
      }
      index++;
      currNode = currNode.next;
    }
    return -1;
  }
  append(element) {
    const node = new Node(element);
    let currNode = null;
    if (this.head === null) {
      this.head = node;
    } else {
      currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
    }
    this.length++;
  }
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let currNode = this.head;
      let prev = null;
      let index = 0;
      if (position === 0) {
        this.head = node;
        this.head.next = currNode;
      } else {
        while (index++ < position) {
          prev = currNode;
          currNode = currNode.next;
        }
        node.next = currNode;
        prev.next = node;
      }
      this.length++;
      return true;
    }
    return false;
  }
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let currNode = this.head;
      let index = 0;
      let prev = null;
      if (position === 0) {
        this.head = currNode.next;
      } else {
        while (index < position) {
          prev = currNode;
          currNode = currNode.next;
          index++;
        }
        prev.next = currNode.next;
      }
      this.length--;
      return currNode.element;
    }
  }
  remove(element) {
    const index = this.findIndex(element);
    this.removeAt(index);
  }
  get isEmpty() {
    return !this.length;
  }
  get size() {
    return this.length;
  }
  toString() {
    let currNode = this.head;
    let string = '';
    while (currNode) {
      string += ` ${currNode.element}`;
      currNode = currNode.next;
    }
    return string;
  }
}

var ccc = new LinkedList();
ccc.append(1);

ccc.append(2);

ccc.append(3);
