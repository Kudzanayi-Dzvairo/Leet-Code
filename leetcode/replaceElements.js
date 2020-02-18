/*Given an array arr, replace every element in that array with the greatest element among the elements to its right,
and replace the last element with -1.

After doing so, return the array.*/

var replaceElements = function(arr){

    let prev = -1
    for(let i = arr.length - 1; i >= 0; i--){

        let cur = arr[i]
        console.log(cur)
        arr[i] = prev;
        console.log(prev)
        prev = Math.max(prev, cur)
        console.log(prev)
        console.log(arr)
    }

} 

let replaceElements1 = function(arr) {
    let maxEle = -1

    for(let i = arr.length -1; i >= 0; i--){
        console.log(arr)
        let currentEle = arr[i]
        // console.log(currentEle)
        arr[i] = maxEle
        // console.log(maxEle)
        if(currentEle > maxEle) {
            maxEle = currentEle
        }
    }
}

console.log(replaceElements([17,18,5,4,6,1]))