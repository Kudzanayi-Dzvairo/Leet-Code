const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

var reverseWords = (words) => {

   let newMessage = words.join('')
   console.log(newMessage)
   newMessage = newMessage.split(' ')

   let leftIndex = 0 
   let rightIndex = newMessage.length-1

   while(leftIndex < rightIndex) {

    let temp =  newMessage[leftIndex]
    newMessage[leftIndex] = newMessage[rightIndex]
    newMessage[rightIndex] = temp

    leftIndex++
    rightIndex--
   }

   return newMessage.join(' ')
} 

console.log(reverseWords(message))