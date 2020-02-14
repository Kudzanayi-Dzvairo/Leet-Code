function find_average_of_subarrays(K, arr){
    const result = []
    for(i = 0; i < arr.length - K + 1; i++){
        // console.log(i, arr.length -  K + 1)
        //find sum of next 'K' elements 
        sum = 0.0
        for(j = i; j < i + K; j++){
            console.log(j, i + K)
            sum += arr[j]
        }
        result.push(sum/ K); //calculate average
    }

    return result
}

console.log(find_average_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))

function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }
  
  
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
  console.log(`Maximum sum of a subarray of size KL ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);