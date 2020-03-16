var intersection = function(nums1, nums2) {
     
    //create a results array
    //create a hash os the first array
    //iterate through the second array and see if element exists in the hash 
    //push result into array 
    //return array 
    
    let result = []
    let hash = new Set(nums1) 
    
    for(let i = 0; i < nums2.length; i++){
        if(hash.has(nums2[i]) && result.indexOf(nums2[i]) === -1){
            result.push(nums2[i])
        }
    }
    return result
}

var intersection = function(nums1, nums2) {
    const [a, b] = [new Set(nums1), new Set(nums2)];
    return [...a].filter(x => b.has(x));
};