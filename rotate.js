function rotate(nums, k){
    let count = k 
    let i = nums.length - 1

    while(count > 0){
        element = nums.pop(nums[i])
        nums.unshift(element)
        count--
    }

}