var largestUniqueNumber = function(A) {
    
    //given an array of intergers, return rge largest one that only occurs once 
    let map = {}
    
    for(let i = 0; i < A.length; i++){
        if(map[A[i]]){
            map[A[i]] += 1
        } else{
            map[A[i]] = 1
        }
}
    
  
    
    once = Object.keys(map).filter(elem => map[elem] == 1).map(Number)
    
    return Math.max(...once, -1)
    
}
    