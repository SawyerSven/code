/**
 * * 栈
 *
 * *栈(stack)
 * *先进后出(LIFO)的有序集合
 * *栈内元素只能通过列表的一端访问，称为栈顶，数据只能在栈顶操作。
 *
 * * 主要操作
 * *  push(). 添加元素到栈的顶端
 * *  pop() . 移除栈最顶端的元素
 *
 * * 其他操作
 * *  peek() 查看当前栈顶元素
 * *  size() 查看当前栈元素总数
 * *  clear() 清空栈内元素
 * *  isEmpty() 判断是否为空
 */

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  /* 入栈 */
  push(item) {
    this.data.push(item);
    this.top = this.data.length;
  }
  /* 出栈 */
  pop() {
    return this.data.pop();
  }
  /* 查看栈顶元素 */
  get peek() {
    return this.data[this.data.length - 1];
  }
  /* 查看站内元素总数 */
  get size() {
    return this.data.length;
  }
  /* 判断是否为空*/
  get isEmpty() {
    return !this.data.length;
  }
  /* 清空栈 */
  clear() {
    this.data.length = 0;
  }
  /* 打印栈内数据 */
  print() {
    console.log(this.data.toString());
  }
}
