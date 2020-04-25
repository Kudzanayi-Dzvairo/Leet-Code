function reverseString(str){

    let strReverse = str.split('')
    let reverseString = ''

    for(let i = strReverse.length-1; i >= 0 ; i--){
         reverseString += strReverse[i]
    }

    return reverseString
}


console.log(reverseString('hello'))

function isPalindrome(str){

  let start = 0 
  let end = str.length-1 

 while(start < end){

     if(str[start] === str[end]){
         start++
         end--
     }else{
         return false
     }
  }
  return true
}

console.log(isPalindrome('racecar'))