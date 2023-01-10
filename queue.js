class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let newNode = new Node(value);
    // if()
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      // this.last
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.first) {
      this.first = this.first.next;
      if (this.first == this.last) {
        this.last = null;
      }
      this.length--;
    }

    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir
