/**
 * Link: https://leetcode.com/problems/design-circular-queue/
 */

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k);
  this.size = k;
  this.head = -1;
  this.tail = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  
  this.tail = (this.tail + 1) === this.size ? 0 : this.tail + 1;
  this.queue[this.tail] = value;
  
  if (this.head === -1) this.head += 1;
 
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this.queue[this.head] = undefined;
  
  if (this.head === this.tail) {
    this.head = -1;
    this.tail = -1;
  } else {
    this.head =  (this.head + 1) === this.size ? 0 : this.head + 1;
  }
  
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1; 
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === -1 && this.tail === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  let nextTail =  (this.tail + 1) === this.size ? 0 : this.tail + 1;
  return nextTail === this.head
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */