var uniqueOccurrences = function(arr) {
    
    let occurrences = {}
    
    for(let i = 0; i < arr.length; i++){
        if(occurrences[arr[i]]){
            occurrences[arr[i]] +=1
        } else{
            occurrences[arr[i]] = 1
        }
    }
    
   let values = Object.values(occurrences).sort()
   
   
   for(let i = 0; i < values.length; i++){
       if(values[i] === values[i+1]) return false
   }
    
    return true 
    
};

arr = [1,2,3,4,5]
let obj = {}

for(let item of arr){
    obj[item] = (obj[item] || 0) + 1
}

const obj = arr.reduce((map, cur) => {
    if (map[cur]) {
        map[cur] += 1
    } else {
        map[cur] = 1
    }
    return map 
}, {})