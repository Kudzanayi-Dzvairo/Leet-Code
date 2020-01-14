// 10-->15-->16

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
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        // create new node
       const newNode = new Node(value)
       // point old tail to new tail
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

        this.head = newNode

        this.length += 1 

        return this.linkedList

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

    insert(index, value){

    }


}

let myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(12)
console.log(myLinkedList.printList())
// console.log(myLinkedList)