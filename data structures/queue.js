class Node {
    contructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null; 
        this.last = null; 
        this.length = 0; 
    }

    peek(){
        return this.first
    }

    enqueue(value){
        //create new Node
        const newNode = new Node(value);
        //if queue length is 0, set first and last to new Node
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } 
        //if there is more than one, set connect last to new Node and set new Node to last 
        else {
            this.last.next = newNode
            this.last = newNode
        }
        //increase length 
        this.length++
        return this
    }

    dequeue(){
        //dequeue check if anything is in the list
        if(!this.first){
            return null
        }
        //if the list has one element make sure last element is null
        if (this.first === this.last){
            this.last = null;
        }
        
        this.first = this.first.next;
        this.length--;
        return this;
    }
}