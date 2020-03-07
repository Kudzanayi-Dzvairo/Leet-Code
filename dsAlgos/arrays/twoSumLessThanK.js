var twoSumLessThanK = function(A, K) {
    
    let sorted = A.sort((a,b) => a - b)
    let end = sorted.length-1 
    let start = 0 
    let highestValue = []
    
    // console.log(sorted)
    
    while(start < end) {
        let sum = sorted[start] + sorted[end]
        console.log(sum)
        if(sum < K){
            highestValue.push(sum)
            start++
        } else {
            end--
        }
        
      
        
    }
    
    highestValue = Math.max(...highestValue)
    
    return (Math.max(highestValue, -1))
    
    
    
}