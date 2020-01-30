function dropElements(arr, func){

    //find length of array for loop
    let times = arr.length

    //create loop for arguments 
    for(let i = 0; i < times; i++){
        //check function with each array 
        if(func(arr[0]){
            break
        }else{
            // remove element if not true
            arr.shift()
        })
    }
    //return array 
    return arr
}

function dropElements(arr, function){

    whlie(!function(arr[0])){
        //while function returns false on 0 index
        arr.shift()
        //shift left until it is true 
    }
    return arr 
}