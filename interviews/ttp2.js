/* 
  Your previous Plain Text content is preserved below:

  Remove all duplicates from an array while preserving the order.

  Example
  Input: [1, 2, 9, 1, 8, 2, 4, 8, 5, 6, 9, 2]
  Output: [1, 2, 9, 8, 4, 5, 6]
*/


const preserveOrder = (arr) => {
    const newSet = new Set(arr);
    return [...newSet];
  };
  
  
  const preserveOrder2 = (arr) => {
    const cache = {};
    // Iterate over each element in arr
    // If element doesn't exist in cache, put it in and return element
    // If element does exit, skip over element and go on to the next
    return arr.filter(el => {
      if(!cache[el]){
        cache[el] = true;
        return el;
      }
    })
  }
  console.log(preserveOrder2([1, 2, 9, 1, 8, 2, 4, 8, 5, 6, 9, 2]))
  