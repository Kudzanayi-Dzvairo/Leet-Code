function translatePigLatin(str) {

    var letters = str.split("");
    //Break original string into an array of characters
    var vowelRegex = /[aeiou]/
    //Regex for strings that contain 'aeiou'
    if(vowelRegex.test(letters[0])){
      //Test the first character of the array
      return letters.join("") + "way"
      //Upon matching adds way to end of the string 
    }
  
    while(true){
      //For cases not matching vowels
      if(!vowelRegex.test(letters[0])){
        //if regex doesn't contain a vowel at first char
        letters.push(letters.splice(0,1))
        //Push it to the end and splice the first letter
      } else{
        //breaks upon finding a vowel 
        break;
      }
    }
    str = letters.join("") + "ay"
    //adds ay to the end and joins string back together
    return str;
  }