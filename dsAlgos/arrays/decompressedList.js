var decompressRLElist = function(nums) {
    
    let decompressed = []
    
    for(let i = 0; i < nums.length; i+=2){
        let times = nums[i] 
        
        while(times > 0){
            decompressed.push(nums[i+1])
            times--
        }
    }
    return decompressed
    
}

var decompressRLElist2 = function(nums){
    const result = []

    for(let i = 0; i < nums.length; i += 2){
        result.push(...new Array(nums[i]).fill(nums[i+1]))
    }
}


console.log(decompressRLElist([1,2,3,4]))