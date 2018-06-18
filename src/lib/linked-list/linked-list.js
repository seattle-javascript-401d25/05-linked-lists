'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // this is O(1) because we know where the head is so we dont have to move through the list
  // space complexity is O(n) because we are adding more to the linked list

  insertAtHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
  }

  // moving through the linked list is O(n) but adding the specific item is O(1)
  // space complexity is O(n) because we are adding more to the linked list

  insertAtTail(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
    return this;
  }

  // moving through the linked list is O(n) but removing the specific item is O(1)
  /* space complexity is O(1) because we are not taking up any more space in the 
  code, we are modifying the same list */

  findNode(val) {
    if (!this.head) {
      return new Error('Empty Linked List');
    }
    if (this.head.value === val) {
      return this.head;
    }
    let currNode = this.head;
    while (currNode.next) {
      if (currNode.next.value === val) {
        return currNode.next;
      }
      currNode = currNode.next;
    }
    return null;
  }

  // moving through the linked list is O(n) but removing the specific item is O(1)
  /* space complexity is O(1) because we are not taking up any more space in 
  the code, we are modifying the same list */

  remove(val) {
    if (this.head.value === val) {
      this.head = this.head.next;
    } else {
      let prevNode = this.head;
      let currNode = prevNode.next;
      while (currNode) {
        if (currNode.value === val) {
          prevNode.next = currNode.next;
          currNode = currNode.next;
          break;
        } else {
          prevNode = currNode;
          currNode = currNode.next;
        }
      }
    }
  }

  // moving through the linked list is O(n) but removing the item is O(1)
  /* space complexity is O(1) because we are not taking up any 
  more space in the code, we are modifying the same list */

  pop() {
    let prevNode = this.head;
    let currNode = prevNode.next;
    while (currNode) {
      if (currNode.next === null) {
        prevNode.next = currNode.next;
        currNode = currNode.next;
        break;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }

  // moving through and modifying the linked list in  map is O(n)
  /* space complexity is O(1) because we are not taking up any 
  more space in the code, we are modifying the same list */

  map(val) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.next === null) {
        currNode.value *= val;
        break;
      } else {
        currNode.value *= val;
        currNode = currNode.next;
      }
    }
    return this;
  }
};
