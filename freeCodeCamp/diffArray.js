function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    
    for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i]))
      newArr.push(arr1[i])
      }
    
    for(let i = 0; i < arr2.length; i++){
    if(!arr1.includes(arr2[i]))
      newArr.push(arr2[i])
      }
  
     return newArr
    }