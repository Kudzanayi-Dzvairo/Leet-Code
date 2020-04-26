function longestWord(sen){
    
   //create filtered array using regex .match()
   let wordArray  = sen.toLowerCase().match(/[a-z0-9]+/g)
   
   //sort array in descending order
   const sorted = wordArray.sort((a,b) => b.length - a.length)

   //If multiple words, out into array
   const longestWordArray = sorted.filter(word => word.length === sorted[0].length)

  if(longestWordArray.length > 1){
     return longestWordArray
  }
  
  console.log(longestWordArray)
  return sorted[0]

}

// console.log(longestWord('One day at a tim!'))


function chunkArray(arr, len){

   let chunkedArray = []

   // let i = 0
    
   // while(i < arr.length){
   //    chunkedArray.push(arr.slice(i, i + len))

   //    i += length
   // }
   // return chunkedArr
   
   arr.forEach(val => {

      const last = chunkedArray.length-1

      if(!last || last.length === len){
         chunkedArray.push([val])
      }else{
         last.push(val)
      }
   })

   return chunkedArray

}

function flattenArray(arr){

   // return arr.reduce((a, b) => {
   //     return a.concat(b)
   // },[])
  
   return [].concat(...arr)

}

// console.log(flattenArray([[1,2], [3,4], [5,6], [7,8], [9,10]]))

function isAnagram(str1, str2){
  return formatStr(str1) === formatStr(str2)
}

function formatStr(str){

   return str
   .replace(/[^\w]/g, '')
   .toLowercase()
   .split('')
   .sort()
   .join('')
}

function letterChanges(str){
   let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
      if(char === 'z' || char === 'Z'){
         return a
      } else {
         return String.fromCharCode(char.charCodeAt() + 1)
      }
   })

   newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase())

   return newStr
}

// function addAll(){
  
//    let args = Array.prototype.slice.call(arguments)
//    total = 0

//    for(let i = 0; i < args.length; i++){
//       total += args[i]
//    }
   
//    return total
// }

function addAll(...numbers){

   // let total = 0

   // numbers.forEach(num => total += num)

   // return total 

   return numbers.reduce((total, num) => total += num, 0)
}

console.log(addAll(1,2,3,4,5))