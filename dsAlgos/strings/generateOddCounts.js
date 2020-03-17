var generateTheString = function(n) {
    
    //if n is an even number we do no want to alternate 
     // we want to add a number once and the another the rest of the times
     
     //if n is odd we want to alternate 
     
     //solve for even first 
     
     let result = ''
     let alternate = 'y' 
     
     for(let i = 0; i < n; i++){
       if(n % 2 === 1){
           result += 'x'
       } 
         
       if(n % 2 === 0){
           result += 'x'
           result += alternate.repeat(n-1)
           return result 
       }
     }
     
     return result
     
 };