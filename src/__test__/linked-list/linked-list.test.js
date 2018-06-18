'use strict';

const LinkedList = require('../../lib/linked-list/linked-list');
const Node = require('../../lib/linked-list/node');
const inspect = require('../utiils');

describe('Test the Linked List', () => {
  let testList;
  beforeEach(() => {
    testList = new LinkedList();
  });

  afterEach(() => {
    testList = null;
  });

  test('Should get a initiate a new list instance', () => {
    expect(testList.head).toBeNull();
  });

  test('insertAtHead function should insert a new head', () => {
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
    inspect(testList, 'INSERT AT HEAD');
  });

  test('insertAtTail function should insert a new tail', () => {
    expect(testList.head).toBeNull();
    testList.insertAtTail(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtTail(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.insertAtTail(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
    inspect(testList, 'INSERT AT HEAD');
  });

  test('findNode function should find the correct node', () => {
    testList.insertAtTail(5);
    testList.insertAtTail(6);
    testList.insertAtTail(7);
        
    expect(testList.findNode(5)).toBeInstanceOf(Node);
    expect(testList.findNode(9)).toBeNull();
  });

  test('remove function should delete the correct node', () => {
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);
    testList.insertAtTail(6);
    expect(testList.head.next.value).toEqual(6);
    testList.remove(6);
    expect(testList.head.next).toBeNull();
    testList.insertAtTail(6);
    testList.insertAtTail(7);
    expect(testList.head.next.next.value).toEqual(7);
    testList.remove(7);
    expect(testList.head.next.next).toBeNull();
  });

  test('pop function should delete the last node', () => {
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);
    testList.insertAtTail(6);
    expect(testList.head.next.value).toEqual(6);
    testList.pop();
    expect(testList.head.next).toBeNull();
    testList.insertAtTail(6);
    testList.insertAtTail(7);
    expect(testList.head.next.next.value).toEqual(7);
    testList.pop();
    expect(testList.head.next.next).toBeNull();
  });

  test('map function should multiple each value with the multiplier passed in', () => {
    testList.insertAtHead(5);
    testList.insertAtTail(6);
    testList.map(2);
    expect(testList.head.value).toEqual(10);
    expect(testList.head.next.value).toEqual(12);
    testList.map(0.5);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
  });
});
