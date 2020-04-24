var findDisappearedNumbers = function(nums) {
    
    nums.sort((a,b) => a - b)
     
  let count = 1
  let arr = []
  
  for(let i = 0; i < nums.length; i++){
     if(!nums.includes(count)){
         arr.push(count)
     }
     count++
  }
 
  return arr
     
 };