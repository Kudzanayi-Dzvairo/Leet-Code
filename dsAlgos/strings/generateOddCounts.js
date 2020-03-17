var generateTheString = function(n) {
    
     
    let result = ''
    
    if(n % 2 === 1){
        result += 'x'.repeat(n)
        return result
    }
    
    if(n % 2 === 0){
        result += 'x'
        result += 'y'.repeat(n-1)
        return result
    }
      
     
     return result
     
 };