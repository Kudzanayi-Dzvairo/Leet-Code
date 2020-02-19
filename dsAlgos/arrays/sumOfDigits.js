var sumOfDigits = function(A) {
    
    let minimumDigit = 100

    for(let i = 0; i < A.length; i++){
        if(A[i] < minimumDigit){
            minimumDigit = A[i]
        }      
    }
    
    let sum = minimumDigit.toString().split('').map(Number).reduce((a,b) => { return a + b})
    
    if(sum % 2 == 0){
        return 1
    } 
    
    return 0 
};