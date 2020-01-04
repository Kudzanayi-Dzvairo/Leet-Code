function findLongestWordLength(str) {
    //spilt array string of words into array of words
    let array = str.split(' ')

    // set count for longest word in string to 0
    let longestString = 0
    
    //itereate over element in array that is a word from string
    array.forEach(x =>{
    //check if length of string at current index is higher than count
      if(longestString < x.length)
    //if so set count to length of string at current index
        longestString = x.length
    })
    
    //return length of longest string
    return longestString;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  