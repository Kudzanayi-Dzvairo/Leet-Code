// function addAll(){
  
//    let args = Array.prototype.slice.call(arguments)
//    total = 0

//    for(let i = 0; i < args.length; i++){
//       total += args[i]
//    }
   
//    return total
// }

function addAll(...numbers){

    // let total = 0
 
    // numbers.forEach(num => total += num)
 
    // return total 
 
    return numbers.reduce((total, num) => total += num, 0)
 }
 
 console.log(addAll(1,2,3,4,5))
 
 function sumAllPrimes(num){
    let total = 0

    function checkForPrime(i){
        for(let j = 2; j < i; j++){
            if(i % j ===0){
                return false
            }
        }
        return true
    }

    for(let i = 2;i <=num; i++ ){
        if(checkForPrime(i)){
            total += 1
        }
    }

    return total
 }

 function seekAndDestroy(arr){
     const args = Array.from(arguments)

     console.log(args)
     console.log(arr)

     function filterArr(arr){
        return args.indexOf(arr) === -1
     }

    return arr.filter(filterArr)

    
 }

 function seekAndDestroy2(arr, ...rest){

    return arr.filter(val => !rest.includes(val))
 }

 console.log(seekAndDestroy([2,3,4,6,6,'hello'], 2, 6,))