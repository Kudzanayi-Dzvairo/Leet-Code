function hasPalindrome(string){

    //Track characters we've seen an odd number of times
    const unpairedCharacters = new Set()

    for(let char of string){
        if(unpairedCharacters.has(char)){
            unpairedCharacters.delete(char)
        } else {
            unpairedCharacters.add(char)
        }
    }

    //The strin has a palindrome permutation if it 
    //has one zero charaters withour a pair
    return unpairedCharacters.size <= 1
 
}

