function flatten(arr){

    // let newArray = [].concat.apply([], arr)

    // return arr.reduce((prev, curr) => {
    //     return prev.concat(curr)
    // }, [])

    return newArray = [].concat(...arr)


}
function flatten(arr){

    // let newArray = [].concat.apply([], arr)

    // return arr.reduce((prev, curr) => {
    //     return prev.concat(curr)
    // }, [])

    return newArray = [].concat(...arr)


}

console.log(flatten([1, 2,[3,4, [5,6,7], 8], 9, 10]))