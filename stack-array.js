class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.arr = [];
  }
  peek() {
    if(this.arr.length <= 0) return null 
    return this.arr[this.arr.length - 1];
  }
  push(value){
    return this.arr.push(value);
  }
  pop(){
    return this.arr.pop();
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('discord');
console.log(myStack.peek())
// myStack.push('discord');
// myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek())
// myStack.pop();
// myStack.pop();


//Discord
//Udemy
//google
