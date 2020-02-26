var toGoatLatin = function(S) {
    
    //if sentence begings with vowel add ma 
    //if sentence begins with consonant send consonant to the end and add ma
    //add as many a's as the index in which the letter sits 
    
 //1) select each word
 //2) split each word 
 //3) check if word[0] is consonant or vowel 
     // - if vowel add ma to end 
     // - if consonant splice consonant from front and add ma 
    
 //4) iterate over array and add number of a's accordinf to index
 //5) join array 
    
   let words = S.split(' ')
 
   
   
   for(let i = 0; i < words.length; i++){
      if(isVowel(words[i][0])){
          words[i] += 'ma'
      }else{
          consonant = words[i][0]
          words[i] = words[i].substring(1)
          words[i] += consonant
          words[i] += 'ma'
          console.log(words[i])
      }
   }
    
    
       
   for(let i = 0; i < words.length+1; i++){
       count = i
       while(count > 0){
           words[i-1] += 'a'
           count -- 
       }
   }
     
       return words.join(' ')
};

function isVowel(x) {

  var result;

  result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
  return result;
}


//Solution 1

var toGoatLatin = function(S){
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    return S.split(' ')
    .map((w,i) =>
    vowels.has(w[0])
    ? w + 'ma' + 'a'.repeat(i + 1)
    : w.slice(1) + w[0] + 'ma' + 'a'.repeat(i + 1)
    )
    .join(' ')
}

//Solution 2

var toGoatLatin = function(S){
    const result = []
    const words = S.split(' ');
    const vowels = new Set(['a','e','i','o','u'])
    let i = 0 
    for(const word of  words){
        let temp = []

        if(vowels.has(word[0].toLowerCase())){
            temp.push(word)
        } else {
            temp.push(word.substring(1))
            temp.push(word[0])
        }

        temp.push('ma')
        temp.push("a".repeat(i + 1))
        result.push(temp.join(''))
        i++
    }
    return result.join(' ')
}