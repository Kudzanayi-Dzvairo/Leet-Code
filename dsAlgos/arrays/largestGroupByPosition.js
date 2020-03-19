var largeGroupPositions = function(S) {
    
    let stringArray = S.split('')
    let result = []
    let pair = []
    
    // console.log(stringArray)
    
    for(var i = 0; i < stringArray.length; i++){
        if(stringArray[i] === stringArray[i+2]) {
            pair.push(i)
        for(var j = i+2; j <stringArray.length; j++){
            if(stringArray[j] !== stringArray[j+1] && stringArray[j] === stringArray[j-3]){
                pair.push(j)
                result.push(pair)
                pair = []
                i = j 
            }
        }
      }
    }
    return result
};

var largeGroup = function(S) {
    let result = []
    if(S.length < 3) return result

    let i = 0 
    let j = 1

    while(i < S.length - 2 && j < S.length){
        if(S[j] !== S[i]){
            if(j-i >= 3) {
               result.push([i, j-1]) 
            }
            i = j 
            j += 1

        }else{
            j += 1 
        }
    }
    if(j - i >= 3){
        result.push([i, j - 1])
    }
    return result
}