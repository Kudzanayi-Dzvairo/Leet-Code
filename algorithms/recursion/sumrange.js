function sumrange(number){
    if(number === 1) return 1
    return number + sumrange(number-1)
}

console.log(sumrange(4))