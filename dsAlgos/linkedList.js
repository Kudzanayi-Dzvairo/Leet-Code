const getDecimalValue = head => {
    let val = 0; 

    while(head){
        val = val*2 + head.val
        head = head.next
    }

    return val
}