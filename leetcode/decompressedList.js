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

console.log(decompressRLElist([1,2,3,4]))