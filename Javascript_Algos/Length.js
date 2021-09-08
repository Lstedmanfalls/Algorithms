// Create a new SLL method length() that returns number of nodes in that list.

class SLLNode {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    addNode(value){
        var NewNode = new SLLNode(value);
        NewNode.next = this.head;
        this.head = NewNode;
        return this;
    }
    length(val){
        var count = 0;
        var runner = this.head;
        while (runner != null){
            runner = runner.next;
            count +=1
        }
        return count;
    }
}

var newSLL = new SLL()
newSLL.addNode(-1).addNode(2).addNode(3).addNode(4).addNode(10)
// console.log(newSLL)
console.log(newSLL.length())