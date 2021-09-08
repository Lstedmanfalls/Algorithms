// Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

class SSLNode {
    constructor(data){
    this.value = data;
    this.next = null;
    }
}

class SSL {
    constructor(){
        this.head = null;
    }
    addNode(value){
        var NewNode = new SSLNode(value);
        NewNode.next = this.head;
        this.head = NewNode;
        return this
    }
    contains(val){
        var runner = this.head;
        while (runner != null){
            if (runner.value == val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

var newSSL = new SSL()

newSSL.addNode(1).addNode(2).addNode(3).addNode(4)
// console.log(newSSL)
console.log(newSSL.contains(4));