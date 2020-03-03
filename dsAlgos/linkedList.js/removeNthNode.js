    
    let dummy = new ListNode(0)
    dummy.next = head
    let hare = dummy
    let tortoise = dummy
    
    for(let i = 1; i <= n + 1; i++){
        hare = hare.next
    
    
    while(hare){
       hare = hare.next
       tortoise = tortoise.next
    }
    
    tortoise.next = tortoise.next.next
    
    return dummy.next
  
    
};