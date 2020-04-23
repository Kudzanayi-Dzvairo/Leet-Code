var findLucky = function(arr) {
    
    let hash = {}
    
    for(let i=0; i < arr.length; i++){
      hash[arr[i]]? hash[arr[i]]++ : hash[arr[i]] = 1
    }
    
    array = []
    
    for(let key in hash){
        if(key == hash[key]){
            array.push(hash[key])
        }
    }
    
    
    
    return Math.max(...array, -1)
    
};