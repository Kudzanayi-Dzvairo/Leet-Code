var sortArrayByParityII = function(A) {

    result = []
    
    
    for(let i = 0, even = 0, odd = 1; i < A.length; i++){
        if(A[i] % 2 === 0){
            result[even] = A[i]
            even += 2
        }else {
            result[odd] =A[i]
            odd += 2
        }
    }
    return result
   
   }


   var sortArrayByParityII = function(A) {
    
    let arrOdd = []
    let arrEven = []
    
    result = []
    
    
    for(let i = 0; i < A.length; i++)
        if(A[i] % 2 === 0) {
            arrEven.push(A[i])
        }else{
            arrOdd.push(A[i])
        }
       
   for(let i = 0; i < A.length; i++){
         if(i % 2 === 0) {
            result.push(arrEven.pop())
        }else{
            result.push(arrOdd.pop())
        }
   }
       
       return result 
   };