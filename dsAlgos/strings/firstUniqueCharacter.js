var firstUniqChar = function(s) {
    //given a string, find the first non-repeating character in it 
    //if it doesn't exist return -1 
    
    //1. create a hash of all the letters 
    let characterHash = {}
    let index = 0 
    
    for(let i = 0; i < s.length; i++){
          characterHash[s[i]] = (characterHash[s[i]] || 0) + 1
         
     }
    
    console.log(characterHash)
    
    //2. iterate through letters and if value that matches its key is 1 return its index 
    do{
        if(characterHash[s[index]] === 1){
        return s.indexOf(s[index])
        }
        index++
    }while(index <= s.length)
    
    //3. if all characters have 2 or more return -1 
    console.log(characterHash[index])
    return -1
    
        
};