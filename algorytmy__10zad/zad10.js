class Stack {
  constructor() {
      this.items = [];
  }

  // metod push
  push(element) {
      this.items.push(element);
  }

  // metod pop
  pop() {
      if (this.isEmpty()) 
          return "Stos jest pusty";
      return this.items.pop();
  }

  // metod isEmpty
  isEmpty() {
      return this.items.length == 0;
  }

  // metod size
  size() {
      return this.items.length;
  }
}

// demonstracja metod
let stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.isEmpty());