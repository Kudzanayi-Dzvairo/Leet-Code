var reverseWords = function(s) {
    
    //split string 
    let splitS = s.split(' ')
    //create empty string 
    let reverseS = ''
    
  
    //loop through string 
    for(let i = 0; i < splitS.length; i++){
      
     //reverse each element in string 
       let reverse = splitS[i].split('').reverse().join('')  
     
      //add reversed element to  reverse string 
       reverseS += reverse 
      //add a space 
       reverseS += ' '  
     }
    
    //return reveresed string trimmed 
    return reverseS.trim()
    
}