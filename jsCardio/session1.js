function reverseString(str){

    let strReverse = str.split('')
    let reverseString = ''

    for(let i = strReverse.length-1; i >= 0 ; i--){
         reverseString += strReverse[i]
    }

    return reverseString
}

function reverseString2(str){

   return str.split('').reduce((revString, char) =>  char + revString, '')
}

// console.log(reverseString2('banana'))


// console.log(reverseString('hello'))

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

function isPalindrome2(str){

    let reverse = str.split('').reverse().join('')

    return str === reverse
}

// console.log(isPalindrome2('poopoo'))


// console.log(isPalindrome('racecar'))

function reverseInteger(num){

    return parseInt(num.toString().split('').reverse().join(''))
}

// console.log(reverseInteger(125))

function capitalizeLetters(str){
     
    let array = str.split(' ')
    let capitalStr = ''

    for(let i = 0; i < array.length; i++){
       capitalized = array[i].charAt(0).toUpperCase() + array[i].slice(1)
       capitalStr += capitalized + ' '
    }

    return capitalStr
}

console.log(capitalizeLetters('i love my life'))