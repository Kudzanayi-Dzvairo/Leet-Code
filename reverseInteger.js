var reverse = function(x) {
    //turn Int to array
    //pop int from the back 
    //push into new array
    //join array
    let x1 = x.toString().split('')
    console.log(x1)
    
    let reversed = []
    
    for(let i = x1.length-1; i >=0 ; i-- ) {
         
        let element = x1.pop()
        reversed.push(element)
        
        if(reversed[0] === 0){
            reversed.shift()
        }
        
        if(reversed[reversed.length-1] === - ){
           negative = reversed.pop()
           reversed.unshift(negative)
           }
    }
    return reversed.join('')
};