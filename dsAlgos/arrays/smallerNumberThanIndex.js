var smallerNumbersThanCurrent = function(nums) {
    
    answer = []
    
    for(let i = 0; i < nums.length; i++){
        let count = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){
                count++
            }else{
                continue
            }
        }
        answer.push(count)
    }
    return answer
};

var smallerNumbersThanCurrent2 = function(nums){

    const sorted = [...nums].sort((a,b) => a - b)

    return nums.map(num => sorted.indexOf(num))
}