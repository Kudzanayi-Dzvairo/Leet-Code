var merge = function(nums1, m, nums2, n) {
    
    let index1 = 0 
    let index2 = 0 
    let count = 0
    
    while(count < m){
        if(nums1[index1] < nums2[index2]){
            index1++
            count++
        }else{
            nums1.splice(index1, 0, nums2[index2])
            index2++
            count++
        }
        
        console.log(nums1)
    }
    

    
};