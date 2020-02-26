var array = [5, 1, 7, 3, 2, 8, 6, 4]

function mergeSort(array){
    //Determine the size of the input
    var arraySize = array.length;

    //If the array passed in has only on element, it is considered sorted
    if(arraySize === 1){
        return;
    }

    //If array contains more than one element split into two parts {left and right arrays}
    var midpoint = Math.floor(arraySize/2)
    var leftArray = array.slice(0, midpoint)
    var rightArray = array.slice(midpoint)

    //recursively call mergeSort()on leftArray and right Array sublists
    mergeSort(leftArray)
    mergeSort(rightArray)

    //after merge fucntion completes executing, merge arrays 
    merge(leftArray, rightArray, array)

    return array 
}

function merge(leftArray, rightArray, array){
    var index = 0; 

    //Both lists have items in them left in them 
    while (leftArray.length && rightArray.length){
        //Chhose the smaller of the two items and add it to the merged list
        console.log('array is: ', array)
        if(rightArray[0] < leftArray[0]){
            array[index++] = rightArray.shift()
        }else{
            array[index++] = leftArray.shift()
        }
    }

    //grab any lingering items fromt the first list after we've exhausted the second list
    while(leftArray.length){
        console.log('left array is: ', leftArray)
        array[index++] = leftArray.shift()
    }

    //grab any lingering items fromt the second list after we've exhausted the first list
    while(rightArray.length){
        console.log('right array is: ', rightArray)
        array[index++] = rightArray.shift();
    }

    console.log('**end of merge function ** array is: ', array)
}

mergeSort(array)