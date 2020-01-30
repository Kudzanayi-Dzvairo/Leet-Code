function sumPrimes(num){
    var arr = []
    // create empty array to store prime nubmers
    for(let i = 2; i <= num; i++){
        console.log(`this i is ${i}`)
        //first loop to check if number is prime
        for(var j = 2; j <= i; j++){
            console.log(`this j is ${j}`)
            //check inputted number by all number leading up to it
            if(i===j){
                //if they are equal it is a prime number 
                console.log(`${i} equals ${j} therefore`)
                arr.push(i)
                console.log(arr)
            }
            
            if(i%j===0){
                console.log(`${i} divided by ${j} = 0 therefore`)
                console.log('BREAK')
                //if true break the loop it isn't prime
                break
            }
        }
    }
    return arr.reduce((x,y) => {return x+y})
}

sumPrimes(10)