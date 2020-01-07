function getIndexToIns(arr, num) {

//sort array in ascending order
arr.sort((a,b) => a - b)

//iterate over array
for(let i = 0; i < arr.length; i++){

//if array element is bigger than or equal to number return its index
    if(arr[i] >= num) return i 
}

return arr.length
}

function getIndexToIns2(arr, num) {
    // Find my place in this sorted array.
  
  //add number to array 
  arr.push(num)
  
  //sort array with number included
  arr.sort((a,b) => a - b)
  
  //return index of number in array once its sorted 
  return arr.indexOf(num)
  }
  

console.log(getIndexToIns2([40, 60], 50))