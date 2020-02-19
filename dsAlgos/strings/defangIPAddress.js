var defangIPaddr = function(address) {
    //the address is a string of numbers
    //each number is seperated by a period 
    //each period should be sandwhiched by a square bracket 
    //
    
    let string = ''
    
    for(let i=0; i < address.length; i++){
        
        if( address[i] === '.'){
            string += '[.]'
        } else {
            string += address[i]
        }
        
    }
    
    return string 
    
}


var defangIPaddr = function(address) {
    //the address is a string of numbers
    //each number is seperated by a period 
    //each period should be sandwhiched by a square bracket 
    //
    
        
    let splitOnP = address.split('.')
    let joinOnP = splitOnP.join('[.]')
    
    return joinOnP
    
}