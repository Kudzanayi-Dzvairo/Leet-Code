//We need to reduce the length of the string or truncate it if it is longer than the given maximum length specified and add ... to the end. 
//If it is not that long then we keep it as is.

function truncateString(str, num) {
    // Clear out that junk in your trunk
    
    //find out if string is longer than number
    if(str.length > num){
     //slice string from beginning to index number and then      add '...'
      return str.slice(0,num) + '...'
    }
      
    //else return string
    return str;
  }
  
function truncateString2(str, num) {
   
    return str.length > num ? str.slice(0,num) + '...' : str

}
  
  console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8));