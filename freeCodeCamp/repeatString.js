/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
    // repeat after me
    //declare new string
    let newStr = ''
  
    //if number is less than zero return empty string
    if(num < 0)return newStr;
    
    //use for loop that runs the amount of times in number variable
    for(let i = 0; i < num; i++){
      //append string argument to new string 
      newStr += str
    }
    
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);
  