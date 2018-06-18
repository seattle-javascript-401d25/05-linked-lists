'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
  }

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
