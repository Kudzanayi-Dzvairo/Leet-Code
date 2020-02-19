var arraysIntersection = function(arr1, arr2, arr3) {
 
    let combinedArr = [...arr1, ...arr2, ...arr3]
    let valueHash = {}
    let result = []
    
    for(let i = 0; i < combinedArr.length; i++){
        if(valueHash[combinedArr[i]]){
            valueHash[combinedArr[i]] +=1
        } else {
            valueHash[combinedArr[i]] = 1
        }
    }
    
    console.log(valueHash)
    
    for(let element in valueHash){
        if(valueHash[element] === 3){
            result.push(element)
        }
    }
    
   return result 

}

const arraysIntersection = (arr1, arr2, arr3) => {
    let intersections = {}

    const addToIntersections = key => {
        intersections[key] = intersections.hasOwnProperty(key) ? intersections[key] + 1 : 1
    }
    arr1.map(addToIntersections)
    arr2.map(addToIntersections)
    arr3.map(addToIntersections)

    return Object.keys(intersections).reduce((total,key) => {
        if(intersections[key] >= 3) {
            total.push(key)
        }
        return total
    }, [])
}