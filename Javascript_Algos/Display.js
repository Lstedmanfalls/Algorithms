// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class SLLNode {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    addNode(value){
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    display(){
        var list = "";
        var runner = this.head;
        while (runner != null){
            var value = runner.value
            list += (value + ", ");
            runner = runner.next;
        }
        if (list == ""){
            return "There is no list"
        }
        return "The value(s) in the list are: " + list
    }
}

var newSLL = new SLL().addNode(1).addNode(20)
newSLL
// console.log(newSLL)
console.log(newSLL.display())