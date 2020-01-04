//Return an array consisting of the largest number from each provided sub-array. For simplicity, 
//the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    // You can do this!
    //create an initial array to store values
    let largestNumber = [0,0,0,0];
  
//itereate over array elements 
  for(let i = 0; i < arr.length; i++){
    //iterate over every element the length of the array which occupies the current index
    for(let j=0; j < arr[i].length; j++){
      //compare the element at the current index to element occupying the i element in the largest array 
      if(arr[i][j] > largestNumber[i]){
        //set the number to the index if it is larger than the cuurrent elemetn 
        largestNumber[i] = arr[i][j]
      }
    }
  }
  console.log(largestNumber)
  //return array
  return largestNumber;
  }
  
 function largestOfFourII(arr) {
    //1)map the original argument using the map function 
    return arr.map( subArray =>{ //3) return the array of the individual largest elements from each array element 
        //2)use the reduce function to iterate over each array elemenet of the duplicated array
        return subArray.reduce((previousLargestNumber, currentLargestNumber) => {
            //3) compare each previous element within array elements with the current element to find largest
            return (currentLargestNumber > previousLargestNumber)? currentLargestNumber:previousLargestNumber
        })
    })
}

  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));