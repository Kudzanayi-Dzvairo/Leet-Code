function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    //copy array #2
    let arr3 = arr2.slice()
    
    //iterate over array1 
    for(let i = 0; i < arr1.length; i++){
        
        //use splice to add element from array1 to index N
        arr3.splice(n, 0, arr1[i])

        //increase N to maintain orde from arr1 as you copy into array2
        n++
    }

      //return array 3 of merged arrays
      return arr3

}

    function frankenSplice2(arr1, arr2, n){

        //copy array 2
        let arr3 = arr2.slice()

        //insert array into copied arr2 using splice + spread operator
        arr3.splice(n,0, ...arr1)

        //return modified copy of arr2
        return arr3

    }
     

   
  
  console.log(frankenSplice2([1, 2, 3], [4, 5, 6], 1));
  