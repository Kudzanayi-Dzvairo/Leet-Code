var removeVowels = function(S) {
    
    return [...S].filter(i => !'aeiou'.includes(i)).join('')
    
};