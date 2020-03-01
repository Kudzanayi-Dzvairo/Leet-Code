var isAnagram = function(s, t) {
    
    //return true if t is an anagram of s 
    if(s.length !== t.length){
        return false
    } 
    
    //anagram means that the value is one string are the same as the values in another string 
    
    let sSorted = s.split('').sort()
    let tSorted = t.split('').sort()
    
    console.log(sSorted, tSorted)
    
    for(let i = 0; i < sSorted.length; i ++){
        if(sSorted[i] === tSorted[i]){
            continue
        } else{
            return false 
        }
    }
    
    return true 
    
  
}