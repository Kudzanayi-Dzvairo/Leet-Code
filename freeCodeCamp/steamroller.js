let oneArray = []

function steamrollArray(arr){
    for(var i=0; i< arr.length; i++){
        if(!Array.isArray(arr[i])){
            oneArray.push(arr[i])
        }else{
            steamrollArray(arr[i])
        }
    }
    return oneArray
}

function steamrollArray2(arr){

    let oneArray = []
    flatten(arr)

    function flatten(arr){
        arr.forEach(arr2 => {
            if(!Array.isArray(arr2)){
                oneArray.push(arr2)
            }else(
                flatten(arr2)
            )
        })
    } 
    return oneArray
}