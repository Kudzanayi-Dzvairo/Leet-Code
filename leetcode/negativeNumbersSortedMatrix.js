var countNegatives = function(grid) {
    
    let count = 0 
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] < 0){
                count ++
            }
        }
    }
    
    return count 
    
};

var countNegatives2 = function(grid) {
    //map grid into new Array, than filter nums 
    let negativeIntArr = grid.map(nums => nums.filter(num => num < 0))
    console.log(negativeIntArr)
    let arr = [];
    for(let i = 0; i < negativeIntArr.length; i++){
        arr.push(...negativeIntArr[i])
    }
    return arr.length

}

console.log(countNegatives2([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
