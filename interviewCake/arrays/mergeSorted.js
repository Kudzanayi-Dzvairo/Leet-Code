const myArray = [3, 4, 6, 10, 11, 15];
const aliceArray = [1, 5, 8, 12, 14, 19];

var mergeSortedArray = (a,b) => {

    let merged = []
    let indexA = 0 
    let indexB = 0
    let mergedIndex = 0

    while(merged.length < (a.length + b.length)){
        if(a[indexA] < b[indexB]){
            merged[mergedIndex] = a[indexA]   
            indexA++
        } else {
            merged[mergedIndex] = b[indexB]
            indexB++
        }
        mergedIndex++
    }

    return merged
}

console.log(mergeSortedArray(myArray, aliceArray))

