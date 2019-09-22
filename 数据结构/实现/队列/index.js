class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }
  dequeue() {
    return this.data.shift();
  }
  get front() {
    return this.data[0];
  }
  get back() {
    return this.data[this.data.length - 1];
  }
  get size() {
    return this.data.length;
  }
  get isEmpty() {
    return !this.data.length;
  }
}
