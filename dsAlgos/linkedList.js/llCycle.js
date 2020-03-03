var hasCycle = function(head) {
    
    //create slow pointer and fast pointer 
    let hare = head 
    let tortoise = head 
    
    //create a loop to go over the cycle as long as the hare node exists and has next node else its not. list
    while(hare && hare.next){
        //move slow pointer by one node and the fast pointer by two nodes
        tortoise = tortoise.next
        hare = hare.next.next 
        
        //if at any point the pointers are equal the list contains a cycle
        if(tortoise === hare) return true
    }
    
    // else return false
    return false
}