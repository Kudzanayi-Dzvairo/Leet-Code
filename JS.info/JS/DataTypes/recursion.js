// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16

//1. Iterative 

function powI(x, n){
    let result = 1

    //multiply result by x n times in the loop
    for(let i = 0; i < n; i++){
        result *= x
    }

    return result 
}

console.log(pow(2,3))

//recursive 
function powR(x, n){
    if(n == 1){
        return x
    } else{ 
        return x * pow(x, n-1)
    }
}

function powT(x, n){
    return (n === 1) ? n : (x * pow(x, n-1))
}