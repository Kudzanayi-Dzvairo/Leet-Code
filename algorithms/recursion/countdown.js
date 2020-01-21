function countdown(number){
    if(number <= 0){
        return 'Blast Off'
    }
    console.log(number)
    number--
   return  countdown(number)
}

console.log(countdown(10))