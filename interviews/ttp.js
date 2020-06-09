const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


/* 
Your previous Plain Text content is preserved below:

You are given two arrays as inputs. Assume one array is of non-negative integers. The second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

[1,2,4]
[4,2]

// THE INITIAL IDEA: We are going to use a hashmap to solve this
 */

function uniqueElement(arr1, arr2) {
  // arr1 is our intact array
  // arr2 is shuffled and has an element missing
  
  /****** THIS RETURNS MISSING ELEMENT ******/
  
  // Iterate over arr2 and create an object for easy lookup of all elements in arr2
  let map = {};
  let output = null;
  
  for(let i = 0; i < arr2.length; i++){
    map[arr2[i]] = true; 
  }
  // Iterate over arr1 and for each element check if it's in our object
   for(let i = 0; i < arr1.length; i++){
     // If not return that element into our output
    if(!map[arr1[i]]){
      output = arr1[i]; 
    }
    
  }
   return output; 
}


console.log(uniqueElement([2,4,1], [4,2]))