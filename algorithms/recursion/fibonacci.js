function fibonacci(n){
    if(number < 2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

function fibonacci2(n){
    let arr = [0,1]
    for(let i = 2; i < n + 1; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
}