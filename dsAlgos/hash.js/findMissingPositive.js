//Given an unsorted integer array, find the smallest missing positive integer.

var firstMissingPositive = function(nums) {
    let i = 1;
    while(nums.includes(i)) {i++};
    return i;
}

var firstMissingPositive = function(nums){
    let obj ={}
    let firstMissing = 1 

    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = true
    }

    for(let i = 0; i<nums.length+1; i++){
        if(typeof obj[i] === 'undefined'){
            firstMissing = i 
            break;
        }

    }
}