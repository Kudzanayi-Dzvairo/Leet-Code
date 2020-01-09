/*We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */

function sumAll(arr) {
    //sort array 
    let sortedArr = arr.sort((a,b) => a - b)
    let range = []
    
    //find range of digits 
     for(let i= sortedArr[0]; i <= sortedArr[1]; i++){
      range.push(i)
    }
    //add the numbers in the range 
    //return result 
  
    return range.reduce((acc, current) => acc + current)
    
  }

  function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  
  sumAll([1, 4])
  
  sumAll([1, 4]);
  