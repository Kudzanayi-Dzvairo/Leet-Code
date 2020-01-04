//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
//But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    //find length of target ending string
    let ending = target.length 
     
    //use substring method to isolate ending of string and match with target ending 
    //to find index use str length minuse length of target
    if(str.substring(str.length - ending) === target){
    //return true 
    return true;
    } else{
    return false
    }
  
  }
  
  confirmEnding("Bastian", "n")