var plusOne = function(digits) {
    let length = digits.length
    let newDigits = []
    // i === length-1
    digits.forEach((d, i) => {
         if(d === 9 && i === length-1) {
             newDigits.push(1)
             newDigits.push(0)
         }else if( i === length-1){
              newDigits.push(digits[i] += 1)
         }else{
              newDigits.push(d)  
         }
        
       
     })   
    return newDigits
 };
 
//  secondSolution 
//   let number = parseInt(digits.join('')) 
     
//      let newNumber = number + 1 
     
//      let newArray = newNumber.toString().split('').map(n => parseInt(n))
     
//      return newArray
 
//  firstSolution
//      let lastNumber = digits.pop()
//      let newNumber = lastNumber + 1 
  
//      digits.push(newNumber)
     
     
//      return digits