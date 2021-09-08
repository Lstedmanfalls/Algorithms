// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
class SLLNode {
    constructor(data) {
        this.value = data; 
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addFront(value) {
        var newNode = new SLLNode (value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeHead() {
        if (this.head == null){
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        return this.head
    }

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    returnValue() {
        if (this.head == null){
            return null;
        }
        return this.head.value
    }
}

var mySLL = new SLL()

mySLL.addFront(10);
mySLL.addFront(20);
// console.log(mySLL)

mySLL.removeHead()
// // console.log(mySLL)
mySLL.removeHead()
// // console.log(mySLL)

console.log(mySLL.returnValue());