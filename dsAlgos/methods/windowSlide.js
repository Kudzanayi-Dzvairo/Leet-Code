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

import sys 
INT_MIN = -sys.maxsize -1
  
def maxSum(arr, n, k): 
  
    # n must be greater than k 
    if not n > k: 
        print("Invalid") 
        return -1
  
    # Compute sum of first window of size k 
    max_sum = INT_MIN 
    window_sum = sum([arr[i] for i in range(k)]) 
  
    # Compute sums of remaining windows by 
    # removing first element of previous 
    # window and adding last element of 
    # current window. 
    for i in range(n-k): 
        window_sum = window_sum - arr[i] + arr[i + k] 
        max_sum = max(window_sum, max_sum) 
  
    return max_sum 
  
# Driver code 
arr = [1, 4, 2, 10, 2, 3, 1, 0, 20] 
k = 4
n = len(arr) 
print(maxSum(arr, n, k)) 
  
# This code is contributed by Kyle McClay 