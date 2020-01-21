function factorial(num){
    if(num === 0) return 1

    return num *= factorial(num - 1)
}

// console.log(factorial(5))

function factorial2(num){
    let answer = 1 

    for(let i = 2; i < num; i++){
        answer *= i      
    }

    return answer

}

console.log(factorial2(5))