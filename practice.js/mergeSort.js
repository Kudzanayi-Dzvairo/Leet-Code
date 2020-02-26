function mergeSort(array){

    //find size of the array 
    let arraySize = array.length

    if(arraySize === 1){
        return 
    }

    //split array into 2
    let midpoint = arraySize/2
    let leftarray = array.slice(0, midpoint)
    let rightarray = array.slice(midpoint)

    //recursivesly call function on arrays until divided to lowest point 

    mergeSort(leftarray)
    mergeSort(rightarray)

    //merge arrays 
    merge(leftarray, rightarray, array)

    return array
}

function merge(leftarray, rightarray, array){
    index = 0 

    //check if there are values in both arrays and compare
    while(rightarray.length && leftarray.length){
        if(rightarray[0] < leftarray[0]){
            array[index++] = rightarray.shift()
        } else {
            array[index++] = leftarray.shift()
        }
    }

    //check for left over values in arrays 
    while(leftarray.length){
        array[index++] = leftarray.shift()
    }

    while(rightarray.length){
        array[index++] = rightarray.shift()
    }
}