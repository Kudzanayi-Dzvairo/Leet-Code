var runningSum = function(nums) {
    
    let running = []
    let sum = 0 
    
    for(let i = 0; i < nums.length; i++){
        running.push(sum += nums[i])
    }
    
    return running
    
};