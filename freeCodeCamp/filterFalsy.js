function bouncer(arr){
     
    //turn elements into Boolean using !! and filter out element that is not equal to false
    let truthy = arr.filter(element => !!element !== false)
    
    //return array 
    return truthy
}