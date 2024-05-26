class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(node, newNode) {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  inOrderTraversal(node, result = []) {
      if (node !== null) {
          this.inOrderTraversal(node.left, result);
          result.push(node.value);
          this.inOrderTraversal(node.right, result);
      }
      return result;
  }

  buildBalancedTree(sortedArray) {
      if (sortedArray.length === 0) {
          return null;
      }

      const mid = Math.floor(sortedArray.length / 2);
      const node = new TreeNode(sortedArray[mid]);

      node.left = this.buildBalancedTree(sortedArray.slice(0, mid));
      node.right = this.buildBalancedTree(sortedArray.slice(mid + 1));

      return node;
  }

  balanceTree() {
      const sortedValues = this.inOrderTraversal(this.root);
      this.root = this.buildBalancedTree(sortedValues);
  }
}

const bst = new BinarySearchTree();
const values = [10, 12, 31, 17, 5, 14, 22, 8, 92, 43]; 
values.forEach(value => bst.insert(value));

console.log("Przed wyważeniem:", JSON.stringify(bst.root, null, 2));
bst.balanceTree();
console.log("Po zrównoważeniu:", JSON.stringify(bst.root, null, 2));