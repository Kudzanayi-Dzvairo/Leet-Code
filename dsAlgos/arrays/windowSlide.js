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



play_arrow

brightness_4
// O(n*k) solution for finding maximum sum of 
// a subarray of size k 
#include <iostream> 
using namespace std; 
  
// Returns maximum sum in a subarray of size k. 
int maxSum(int arr[], int n, int k) 
{ 
    // Initialize result 
    int max_sum = INT_MIN; 
  
    // Consider all blocks starting with i. 
    for (int i = 0; i < n - k + 1; i++) { 
        int current_sum = 0; 
        for (int j = 0; j < k; j++) 
            current_sum = current_sum + arr[i + j]; 
  
        // Update result if required. 
        max_sum = max(current_sum, max_sum); 
    } 
  
    return max_sum; 