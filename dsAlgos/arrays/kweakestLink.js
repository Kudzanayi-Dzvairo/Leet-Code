var kWeakestRows = function(mat, k) {
    
    let result = []
    
    let soldierHash = {}
    //iterate over array of arrays
    for(let i = 0; i < mat.length; i++){
    //set soldier count
        soldierHash[i] = 0 
        let soldierCount = 0
        //iterate to count number of solider
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === 1){
                soldierCount++
                soldierHash[i] = soldierCount
                
            }
        }
    }
    
 let a =  Object.entries(soldierHash).sort((a,b) => a[1] - b[1])

 for(let i = 0; i < k; i++){
     console.log(a)
     result.push(parseInt(a[i]))
 }
   return result
    
};


var kWeakestRows = function(mat, k) {
    return mat
    .map((row, index) => [index, row.filter(n => n ===1).length])
    .sort(([i1, c1], [i2, c2]) => c1 - c2 || i1 - i2)
    .map(([index]) => index)
    .slice(0,k)
}
