//Given a sorted array A( sorted in ascending order),having N intergers, 
//find if there exists any pair of elements (A[i], A[j]) such that 
//their sum is equal to X
//
//input: A = [2,3,4,5,6,7,8,9], k = 10 
//Output: true

const arr = [2,3,4,5,6,7,8,9]
const k = 11;

function findPairs(arr, k){
    let start = 0 
    let end = arr.length-1

    while(start < end){
        if(array[start] + array[end] === k){
            return true 
        } else if(arra[start] + array[end] < k){
            start++
        } else {
            end--
        }

    }
    return false 
}
console.log(findPairs(arr, k))


function findPairs(arr, k){
    let start = 0 
    let end = arr.length-1
    let pairs = []

    while(start < end){
        if(array[start] + array[end] === k){
             pairs.push(start, end)
             start++
             end--
        } else if(arra[start] + array[end] < k){
            start++
        } else {
            end--
        }

    }
    return occurences
}
console.log(findPairs(arr, k))