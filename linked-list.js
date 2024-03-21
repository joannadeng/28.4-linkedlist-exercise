/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // if it's an empty LinkedList
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    }else{
      // if it's not an empty LinkedList
    this.tail.next = newNode;
    this.tail = newNode;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // if it's an empty LinkedList
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else{
       // if it's not an item LinkedList
    newNode.next = this.head;
    this.head = newNode;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    // empty LinkedList
    if(this.length === 0){
      throw new Error("empty list")
    }

    // single Node LinkedList (first node === last node)
    
    let lastNode = this.tail;
    if (this.head === this.tail){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }else {
      let prev = this.getAt(this.length - 1 - 1);
      prev.next = null;
    }
    this.length -= 1;
    return lastNode;
  }

  /** shift(): return & remove first item. */

  shift() {
    // empty LinkedList
    if(this.length === 0){
      throw new Error("empty list")
    }

     // single Node LinkedList (first node === last node)
     let currentNode = this.head
     if (this.head === this.tail){
       this.head = null;
       this.tail = null;
       this.length = 0;
     }else{
      this.head = currentNode.next;
     }
     this.length -= 1;
     return currentNode;
  }

  /** getAt(idx): get val at idx. */
// get node at index
  getAt(idx) {

    let currentNote = this.head;
    let count = 0;
    while(currentNote != null){
      if(count === idx) {
        return currentNote.val;
      }
      count++;
      currentNote = currentNote.next;
    }
    // empty linked list
    return currentNote;
  }
// get val at index
  get(idx){
    let note = this.getAt(idx);
    return note.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
     // when idx is invalid
     if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.")
    }

    let currentNote = this.getAt(idx);
    currentNote.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
     // when idx is invalid
     if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.")
    }

    // when idx equals the first or last idx in the list
    if (idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let prev = this.getAt(idx-1);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length +=1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // when idx is invalid
    if(idx >= this.length || idx < 0) {
      throw new Error("Invalid index.")
    }

    // remove the first one or the last one;
    if(idx === 0) return this.shift();
    if(idx === this.length -1) return this.pop();
   
    let prev = this.getAt(idx - 1);
    currentNode = this.getAt(idx);
    prev.next = currentNode.next;
    this.length -= 1;
    return currentNode;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.head === null) return -1;
    let count = 0;
    let value = 0;
    let currentNote = this.head;
    while (currentNote != null){
      value = value + currentNote.value;
      count ++;
      currentNote = currentNote.next;
    }
    
    return value/count;
  }
}

module.exports = LinkedList;
