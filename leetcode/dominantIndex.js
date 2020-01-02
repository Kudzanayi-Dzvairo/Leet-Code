// function dominantIndex(nums){
 
//     let largest = 0 
//     let secondLargest = 0
//     let index
//     for(i = 0; i < nums.length; i++){
//         if(nums[i] > largest){
//             secondLargest = largest
//             largest = nums[i]
//             index = i
//             }
//         }

//     if(largest >= secondLargest * 2){
//         return index
//     }

//     return -1
// }

function dominantIndex2(nums){
    
    let largestNum = -1, largestIndex = 0, nextLargest = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= largestNum){
            nextLargest = largestNum
            largestNum = nums[i]
        }

    }
   
}

console.log(dominantIndex([0,0,3,2]))