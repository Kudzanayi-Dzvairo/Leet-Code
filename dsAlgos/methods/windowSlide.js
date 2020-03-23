//Given an array of intergers the size of 'n'. Calculate the maximum sum possible
//for 'k' consecutive elements in the array 

//Input : [10, 20, 30, 40, 50, 60, 70]

//k = 3 

//Output: 180 

const arr =  [10, 20, 30, 40, 50, 60, 70]
const k = 2

function maxSum(arr, k){

    if(k > arr.length){
        return 'invalid'
    }

    let windowTotal = 0; 
    
    //create the window to start with and set to window total
    for(let i=0; i<k; i++){
        windowTotal += arr[i]
    }

    let maxSumResult = windowTotal
    for(let i=k; i < arr.length; i++){

        //add the value that window is sliding to and remove value that window is sliding from 
        windowTotal += arr[i] - arr[i-k]
        //find the max of between the new window total and the sitting max sum result
        maxSumResult = Math.max(windowTotal, maxSumResult)
    }

    
}


function maxSum2(arr, k) { 
    //initialize result
        let maxSum = 0 
    for(let i = 0; i < arr.length - k; i++){
             currentSum = 0 
             for(let j = k; j < k; j++) {
                 currentSum  += arr[i] - arr[i-k]
                 
                 max_sum = Math.max(currentSum, maxSum)
              }
         return maxSum
    }

}

console.log(maxSum2(arr, k))
