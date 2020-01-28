function myReplace(str, before, after) {
    
    //find index where before is on string
    let index = str.indexOf(before);

    
    //check to see if the first letter is uppercase or not 
    if (str[index] === str[index].toUpperCase()){
        //change the after word to be capitalized before we use it 
        after = after.charAt(0).toUpperCase() + after.slice(1)
    }
    // Now replace the original str with the editied one
    str = str.replace(before, after)
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  