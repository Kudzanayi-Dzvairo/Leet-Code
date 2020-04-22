matrix = [[3,7,8],[9,11,13],[15,16,17]]

var luckyNumbers = function(matrix){
       

    let minArray = []
    let maxArray = []
    let answer = []
    
    
    for(let i = 0; i < matrix.length; i++){
            let min = Infinity
        for(let j = 0; j < matrix[i].length; j++){
          if(matrix[i][j] < min){
              min = matrix[i][j]
          }
        }
        minArray.push(min)
    }

    for(let i = 0; i < matrix[0].length; i++){
          let max = -Infinity
        for(let j = 0; j < matrix.length; j++){
            if(matrix[j][i] > max){
               max = matrix[j][i] 
            }
        }
        maxArray.push(max)
    }

    
    for(let i = 0; i < minArray.length; i++){
        if(maxArray.indexOf(minArray[i]) !== -1){
            answer.push(minArray[i])
        }
    }

    return answer

} 

console.log(luckyNumbers(matrix)) 