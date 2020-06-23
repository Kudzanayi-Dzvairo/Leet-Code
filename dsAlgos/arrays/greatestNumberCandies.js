var kidsWithCandies = function(candies, extraCandies) {
    
    let highest = Math.max(...candies)
    let count = []
    
    for(let i = 0; i < candies.length; i++){
     candies[i] + extraCandies >= highest ? count.push(true) : count.push(false)        
        
    }
    
    return count
    
};