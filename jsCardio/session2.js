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

