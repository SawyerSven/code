class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
    this.length = 0;
  }
  append(element) {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(element);
    this.length++;
  }
  findIndex(position) {
    if (position > -1 && position <= this.length) {
      let index = 0;
      let currNode = this.head;
      while (position > index++) {
        currNode = currNode.next;
      }
      return currNode.element;
    }
    return false;
  }
  insert(position, element) {
    if (position > -1 && position <= this.length) {
      let node = new Node(element);
      let index = 0;
      let prev = null;
      let currNode = this.head;
      if (position === 0) {
        node.next = this.head.next;
        this.head = node;
      } else {
        while (index++ < position) {
          prev = currNode;
          currNode = currNode.next;
        }
        node.next = currNode;
        prev.next = node;
      }
      this.length++;
      return this;
    }
    return false;
  }
  removeAt(position) {}
  remove(element) {}
  findElement(element) {}
  get size() {
    return this.length;
  }
}

var ccc = new LinkedList();
ccc.append(1);

ccc.append(2);

ccc.append(3);
