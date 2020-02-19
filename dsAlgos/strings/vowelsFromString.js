let removeVowels = (s) => {
    //Iterate over string 
    //if match remove vowel
    // return remaining string 

    for(i = 0; i < s.length; i++){
        if(s[i] === "a" || "e" || "i" || "o" || "u") {
            // console.log(s[i])
            s.split('')
            console.log(s)
            // s.splice(s[i],0)
            // s.join(',')
        }
    }
    return s
}

console.log(removeVowels("leetcodeisacommunityforcoders"))