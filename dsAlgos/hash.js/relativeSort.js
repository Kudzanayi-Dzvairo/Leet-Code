var relativeSortArray = function(arr1, arr2) {
  
    const map = {}
    const solArr = [];
    const restArr = [];
     
     for(const val of arr2){
         map[val] = 0 
     }
     
     for(const val of arr1){
         if(map[val] >= 0){
             map[val]++
         }else{
             restArr.push(val)
         }
     }
     
     for(const val of arr2){
         for(let i = 0; i < map[val]; i++){
             solArr.push(val)
         }
     }
     
     return [...solArr, ...restArr.sort((a,b)=> a - b)]
         
     
 }
     