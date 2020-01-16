//10<=>5<=>16

let ll = {
    head: {
        value:  10, 
        next: {
            value: 5,
            next:{
                value:16,
                next:null
            }
        }
    }
}

class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null,
            prev:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        // create new node
       const newNode = new Node(value)
       // point old tail to new tail
        newNode.prev = this.tail 
        
        this.tail.next = newNode
        //make new node tail node
        this.tail = newNode
        //increase length
        this.length += 1
        //returns linked list
        return this
    }

    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head

        this.head.prev = newNode

        this.head = newNode

        this.length += 1 

        return this

    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array 
    }

    traverseToIndex(index){
        //to traverse set counter at 0
        let counter = 0
        //start counting from head node
        let currentNode = this.head;
        //use while loop that continues to travese if counter does not equal index
        while(counter !== index){
            //set current node to next node by using next propery
            currentNode = currentNode.next
            //increment counter
            counter++
        }
        //return node when found 
        return currentNode
    }

    insert(index, value){
        //check if index is longer than length, if so add to end 
        if(index >= this.length){
            return this.append(value)
        }
        //create a new Node
        const newNode = new Node(value)

        //traverse to the index you wish to insert to minus one becuase you need to point from that index to insert index
        const leader = this.traverseToIndex(index-1)
        //set old index placement to leader.next
        const follower = leader.next;
        //set new node to index by making it leader.next
        leader.next = newNode
        //point new node to previous index holder 
        newNode.next = follower
        newNode.prev = leader
        follower.prev = newNode
        
        //increase length
        this.length ++ 
        //print list 
        return this.printList()

    }

    remove(index){

        //find and save the leader node
        const leader = this.traverseToIndex(index-1)
        //find the node you'd like to remove
        const removed = leader.next
        //connect leader.next to the node after the element we wish to remove
         leader.next = removed.next
    
        this.length --

        return this.printList

    }


}

let myLinkedList = new DoublyLinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(12)
console.log(myLinkedList)
// myLinkedList.insert(2, 45)
// myLinkedList.remove(2)
// console.log(myLinkedList.printList())
// console.log(myLinkedList)