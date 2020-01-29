function diffArray(arr1, arr2) {
    var newArr = [];
    
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

    function diffArray(arr1, arr2) {
        
    var newArr = [...arr1, ...arr2];
        // Same, same; but different.
         
    return newArr.filter(elem => !arr1.includes(elem) || !arr2.includes(elem))
        
      }

      funtion diffArray3(arr1, arr2){
        var holderArray = [];

        for(var i=0; i< arr1.length; i++){
          //iterate through array 1
          if(arr2.indexOf(arr1[i]) === -1){
            //check if element is contained in array 2
            holderArray.push(arr1[i])
            //if not push element into holder array
          }

          //same shit
        for(var j=0; j<arr2.length; j++){
          if(arr1.indexOf(arr2[j])=== - 1){
            holderArray.push(arr2[j])
          }
        }

        return holderArray

        }
      }

      console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))