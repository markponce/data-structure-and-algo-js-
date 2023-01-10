class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
    // console.log('peek');
    // let next = this.top;
    // while(next) {
    //     console.log(next.value);
    //     next = next.next;
    // }
  }
  push(value){
    const top = this.top;
    const newNode = new Node(value);
    if(top) {
        newNode.next = top
        this.top = newNode
    } else {
        this.top = newNode;
    }
    if(this.length <= 0) this.bottom = this.top;
    this.length++
    return this;
  }
  pop(){
    let retrn = null
    if(this.length > 0) {
        retrn = this.top
        this.top = this.top.next;
        if(this.top == null){
            this.bottom = null
        }
        this.length--
    }
    return retrn
  }
}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.peek()
myStack.pop()
myStack.peek()
myStack.pop()
myStack.pop()
myStack.peek()
// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.peek()

console.log(myStack)


//Discord
//Udemy
//google
