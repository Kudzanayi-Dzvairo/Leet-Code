function findElement(arr, func) {
    let num = 0;
    //run loop over array 
    for(let i=0; i < arr.length; i++){
    //set num to array element at i
      num = arr[i]
    //pass num to function parameter and check if true
      if(func(num)){
    //if true return num
        return num
      }
    }
    //if no num is true return undefined 
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);