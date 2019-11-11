/* 
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

function single(array){

    //sort array
    //loop through sorted array
    //check if following number is duplicate
    //return result if false 

    let hash = {}

    for(let i = 0; i < array.length; i++){
        if(!hash[array[i]]){
            hash[array[i]] = 1
        } else{
            hash[array[i]] +=1
        }
    }



    for(let num in hash){
        if(hash[num] === 1){
        return num
        }
    }
}

console.log(single([4,1,2,1,2]))