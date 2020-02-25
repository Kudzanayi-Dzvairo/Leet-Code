// var countCharacters = function(words, chars) {
    
//     //given a string of words
//     // as string is good if it can be formed from characters in chars(each character can only be used once)
//     //return the sum of lenghts of all good strings in words 
    
//     //create variable to keep count 
//     //check if complete word is in, save it, add it 
//     //if not toss whole word
//     let count = ''
//     let valid = ''
    
//     //iterate over each element in words 
    
//     for(let i = 0; i < words.length; i++){
//         word = words[i].split('')
//         count += valid
//         for(const val of word){
//             if(chars.includes(val)){
//                 valid += val 
//             } else{
//                 valid = ''
//                 break
//             }
            
           
//         }
//     }
    
//     return count.length
    
    
// };

var countCharacters2 = function (words, chars){
    
    result = ''

    for(let word of words){
        if(checkifwordisgood(word, chars)){
            result += word 
        }
    }

    return result.length
     
  
};


    function checkifwordisgood(words, chars){
        for(let letter of words){
            if(!chars.includes(letter)){
                return false
            } else {
                chars = chars.replace(letter, "")
            }
        }

        return true 
    
    }




console.log(countCharacters2(["cat","bt","hat","tree"], "atach"))