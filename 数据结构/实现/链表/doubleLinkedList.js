class Node {
  constructor(element) {
    this.element = element;
    this.previous = null;
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
    let node = new Node(element);
    while (currNode.next) {
      currNode = currNode.next;
    }
    node.previous = currNode;
    currNode.next = node;
    this.length++;
    return this;
  }
  findIndex(element) {
    let currNode = this.head;
    let index = 0;
    while (currNode) {
      if (currNode.element === element) {
        return index;
      }
      index++;
      currNode = currNode.next;
    }
    return -1;
  }
  removeAt(position) {
    let currNode = this.head;
    let index = 0;
    if (position > -1 && position < this.length) {
      if (position === 0) {
        this.head = currNode.next;
      } else {
        while (position > index++) {
          currNode = currNode.next;
        }
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
      }
      this.length--;
    }
    return this;
  }
  remove(element) {
    let index = this.findIndex(element);
    this.removeAt(index);
    return this;
  }
  insert(position, element) {}
  get isEmpty() {}
  get size() {}
  get display() {}
}

var ccc = new LinkedList();
ccc.append(1);
ccc.append(2);
ccc.append(3);
ccc.append(4);
ccc.append(5);
ccc.append(6);
