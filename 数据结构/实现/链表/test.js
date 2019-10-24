/**
 * 链表
 * @description 链表的每个元素(Node)通过element保存元素的值，next是对下一个节点的引用
 * @class
 * @constructor Node
 */

eval('window.highlightSearchTerm = function(term) {};');

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 *
 * @name 链表
 * @class LinkedList
 */
class LinkedList {
  constructor() {
    this.head = new Node('head'); // 链表初始化的时候添加一个头结点
    this.length = 0; // 初始化的链表的长度为0
  }
  /**
   *
   * 链表追加元素时，找到链表的尾节点并将尾节点的next指向要添加的元素
   * @param {*} element
   * @memberof LinkedList
   */
  append(element) {
    let currNode = this.head; // 链表的初始节点是head节点
    while (currNode.next) {
      // 如果存在next,即当前元素不是尾元素，则循环找到尾元素。当next不存在时，则当前元素为尾元素。
      currNode = currNode.next;
    }
    currNode.next = new Node(element); // 将尾元素的next指向新追加的元素
    this.length++; // 链表长度加一
  }

  /**
   * @description 根据指定的position返回元素
   * @param {Number} position 元素位置
   * @memberof LinkedList
   * @returns {Node|Boolean} 链表的节点或为找到返回false
   */
  findPosition(position) {
    if (position > -1 && position <= this.length) {
      //
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
  /**
   *@description 根据元素找到元素的下标
   * @param {*} element
   * @memberof LinkedList
   */
  findIndex(element) {
    let currNode = this.head; // 第一个节点为head节点
    let index = 0; // 默认的索引
    while (currNode) {
      if (element === currNode.element) {
        return index;
      }
      index++;
      currNode = currNode.next;
    }
    return -1;
  }
  removeAt(position) {
    if (position > -1 && position <= this.length) {
      let index = 0;
      let currNode = this.head;
      let prev = null;
      if (position === 0) {
        this.head = currNode.next;
      } else {
        while (position > index++) {
          prev = currNode;
          currNode = currNode.next;
        }
        prev.next = currNode.next;
      }
    }
    this.length--;
    return this;
  }
  remove(element) {
    let index = this.findIndex(element);
    return this.removeAt(index);
  }
  get size() {
    return this.length;
  }
  get display() {
    let currNode = this.head;
    let str = '';
    while (currNode) {
      str += ` ${currNode.element}`;
      currNode = currNode.next;
    }
    return str;
  }
}

var ccc = new LinkedList();
ccc.append(1);

ccc.append(2);

ccc.append(3);
