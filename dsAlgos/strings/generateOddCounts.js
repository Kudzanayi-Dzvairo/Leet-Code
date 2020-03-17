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

 //if odd is even we fill everything but the last letter with x and then we use y, else we fill everything with y

 var generateString = (n) => {

     let result = ''

     if(n % 2 === 0){
         for(let i = 0; i < n-1; i++){
             result += 'x'
         }
         result += 'y'
     }else{
        for (let i = 0; i <n; i++) {
            result+='y'
        }
     }

     return result
 }