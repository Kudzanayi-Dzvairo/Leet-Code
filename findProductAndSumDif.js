var subtractProductAndSum = function(n) {
    let product = 1
    let sum = 0 
    let string = n.toString()
    
    for(let i = 0; i < string.length; i++){
        product *= parseInt(string[i])
        sum += parseInt(string[i])
    }
    
     return product-sum
    
    
};