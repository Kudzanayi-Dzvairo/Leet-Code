function destroyer(arr) {
    // Remove all the values
    let args = Array.from(arguments)
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < args.length; j++){
        if(arr[i] == args[j]){
          delete arr[i]
        }
      }
    }
    return arr.filter(Boolean);
  }
  
  function destroyer2(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }