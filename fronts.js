class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }

    // addFront adds a new node to the front of the list

    addFront(value){
        let new_node = new Node(value);

        // if the list is empty, place the new node as the head
        if(!this.head){
            this.head = new_node;
            return this;
        }

        // if the list is not empty
        // new node points to the current head (which will become second node in list)
        new_node.next = this.head;
        
        // make the new node the head of the list
        this.head = new_node;
        return this;
    }

    displaySinglyLinkedList(){

        //empty list
        if(!this.head){
            console.log("(null)");
            return this;
        }
        let display_list = "";

        //print head
        let runner = this.head;
        display_list += `(${runner.data}) -> `;
        runner = runner.next;

        while(runner){
            display_list += `(${(runner.data)}) -> `;
            runner = runner.next;
        }

        console.log(display_list);
    }

    //remove the head node and return the new list head node.  If the list is empty return null

    removeFront(){

        // empty list    
        if(!this.head){
            return null;
        }

        // one-node list
        if (!this.head.next){
            this.head = null;
            return this;
        }

        // two or more node list
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        return this;

    }

    // front returns the value (not the node) at the head of the list. If the list is empty, return null

    front(){

        // empty list
        if(!this.head){
            return null;
        }

        // list has at least one node
        return this.head.data;
    }

    
}


let SLL1 = new SinglyLinkedList();
SLL1.displaySinglyLinkedList();
SLL1.addFront(18);
SLL1.displaySinglyLinkedList();
SLL1.addFront(5);
SLL1.displaySinglyLinkedList();
SLL1.addFront(73);
SLL1.displaySinglyLinkedList();
SLL1.removeFront();
SLL1.displaySinglyLinkedList();
SLL1.removeFront();
SLL1.displaySinglyLinkedList();
SLL1.removeFront();
SLL1.displaySinglyLinkedList();
SLL1.removeFront();
SLL1.displaySinglyLinkedList();

SLL1.displaySinglyLinkedList();
let head_value = SLL1.front();
console.log("head value ->", head_value);


SLL1.addFront(18);
SLL1.displaySinglyLinkedList();
head_value = SLL1.front();
console.log("head value ->", head_value);

SLL1.addFront(5);
SLL1.displaySinglyLinkedList();
head_value = SLL1.front();
console.log("head value ->", head_value);


SLL1.addFront(73);
SLL1.displaySinglyLinkedList();
head_value = SLL1.front();
console.log("head value ->", head_value);





