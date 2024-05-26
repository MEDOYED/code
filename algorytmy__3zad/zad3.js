class Node {
  constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  // Додавання елемента в кінець списку
  append(data) {
      if (!this.head) {
          this.head = new Node(data);
          return;
      }

      let current = this.head;
      while (current.next) {
          current = current.next;
      }

      current.next = new Node(data);
  }

  // Видалення елемента зі списку
  remove(data) {
      if (!this.head) {
          return;
      }

      if (this.head.data === data) {
          this.head = this.head.next;
          return;
      }

      let current = this.head;
      while (current.next) {
          if (current.next.data === data) {
              current.next = current.next.next;
              return;
          }
          current = current.next;
      }
  }

  // Виведення всіх елементів списку
  print() {
      let current = this.head;
      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }
}

let list = new LinkedList();
list.append('Element 1');
list.append('Element 2');
list.append('Element 3');
list.append('Element 4');
list.print(); // Will display: Element 1, Element 2, Element 3
console.log('-------------');
list.remove('Element 1');
list.remove('Element 3');
list.print(); // Will display: Element 1, Element 3
