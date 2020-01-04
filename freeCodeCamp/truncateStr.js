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
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);