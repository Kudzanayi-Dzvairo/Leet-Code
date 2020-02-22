var heightChecker = function(heights) {
    
    let count = 0 
    
    let sorted = [...heights]
    
    sorted = sorted.sort((a,b) => a-b)
    
    console.log(heights)
    console.log(sorted)
    
    for(let i = 0; i < heights.length; i++){
        if(heights[i] !== sorted[i]){
            count++
        }
    }
    return count 
};