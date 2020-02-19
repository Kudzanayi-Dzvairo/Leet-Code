var repeatedNTimes = function(A) {
    
    let mapped = {}
    
    
    for (let i = 0; i < A.length; i++) {
        if(mapped[A[i]]){
            mapped[A[i]] += 1
        } else {
            mapped[A[i]] = 1
        }

        if(mapped[A[i]] == 2) return A[i]

        
        
        // console.log(mapped)
        
    }
    
   
   
};

console.log(repeatedNTimes([2,1,2,5,3,2]))