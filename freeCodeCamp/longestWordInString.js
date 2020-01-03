function findLongestWordLength(str) {

    let array = str.split(' ')
    let count = 0
    
    array.forEach(x =>{
      if(count < x.length)
        count= x.length
    })
    
    return count;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  