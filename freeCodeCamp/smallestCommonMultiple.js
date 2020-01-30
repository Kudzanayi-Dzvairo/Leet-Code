function smallestCommon(arr){
    //extract min and max from array argument (must spread because they ar integers)
    let max = Math.max(...arr)
    let min = Math.min(...arr)

    //let us say the solution is max
    let sol = max 

    //use a for loop to confirm all numbers in the range are of solution divide to 0 
    for(let i= max -1; i >= min; i--){
        if(sol % i){
            //if not solution add max to solution and run loop
            sol += max
            i = max
        }
    }
    return sol 
}