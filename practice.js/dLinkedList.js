class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
 }
 
 class LinkedList {
     constructor(value){
         this.head = {
             value = value
             next = null
             prev = null
         }
         this.tail = this.head
         this.length = 1
     }
 }
 
 append(value){
 
     //create new Node
     const newNode = new Node(value)
 
     //add node to the tail
     this.tail.next = newNode
    
     //make newNode prev the old tail 
     newNode.prev = this.tail 

     //set newNode as tail
     this.tail = newNode
 
     //increase length
     this.length++
 
     return this 
 }
 
 prepend(value) {
 
     //create new Node
     const newNode = new Node(value)
 
     //connect old head to new head
     newNode.next = this.head

     //set old head prev to new node since its the new head
     this.head.prev = newNode
 
     //set new Node to head 
     this.head = newNode
 
     //increase length
     this.length++
 
     return this 
 }
 
 printList(){
 
     let arr = []
     //set head as starting point
     let currentNode = this.head
 
     while(currentNode !== null){
         arr.push(currentNode)
         currentNode = currentNode.next
     }
 
     return arr
 }
 
 traverseToIndex(index){
 
     counter = 1
 
     currentNode = this.head 
 
     while(counter !== index){
         currentNode = currentNode.next
         counter++
     }
 
     return currentNode
 }
 
 insert(index, value){
 
     if(index >= this.length){
         return append(value)
     }
 
     //create newNode
     const newNode = new Node(value)
 
     //find place where we shall insert newNode
     const leader = traverseToIndex(index -1)

     //obtain the node that will follow the new node
     const follower = leader.next 

     //insert newNode 
     leader.next = newNode
     
     //set previous 
     newNode.prev = leader

     //set follower
     newNode.next = follower 

     //sort follower out 
     follower.prev = newNode 

     //increase length 
     length++
    
      return this
 }
 
 removeIndex(index){
 
     //find node pointing to node to be removed
     leader = traverseToIndex(index -1)
 
     //mark removed node for access to its follower
     const removed = leader.next 
 
     //connect removed loads leader to removed nodes follower 
     leader.next = removed.next
 
     //decrease length
     this.length--
 
     return this 
     
 }