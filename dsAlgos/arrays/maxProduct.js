var maxProduct = function(nums) {

    let max = 0
    
    for(let i = 0; i < nums.length; i++){
        let a = nums[i] - 1
        for(let j = 1; j < nums.length; j++){
            let b = nums[j] - 1
        if(i !== j)
         max = Math.max(max, a * b)
        }
    }
    
    return max
         
    
}