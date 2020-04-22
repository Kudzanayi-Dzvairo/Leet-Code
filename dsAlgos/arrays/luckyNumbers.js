matrix = [[3,7,8],[9,11,13],[15,16,17]]

var luckyNumbers = function(matrix){
       

    let minArray = []
    let maxArray = []
    let answer = []
    
    //iterate through every row
    for(let i = 0; i < matrix.length; i++){
            let min = Infinity
            //iterate through each column in a single row
        for(let j = 0; j < matrix[i].length; j++){
            //check if it is the minimum value
          if(matrix[i][j] < min){
              //if so set min value 
              min = matrix[i][j]
          }
        }
        //set in array of minimum values for each row
        minArray.push(min)
    }
    
    //iterate through a single column
    for(let i = 0; i < matrix[0].length; i++){
          let max = -Infinity
          //look at each an element from each row in current column
        for(let j = 0; j < matrix.length; j++){
            //check if it is the max digit in that column
            if(matrix[j][i] > max){
                //if so set it 
               max = matrix[j][i] 
            }
        }
        //push max number in each column into an array
        maxArray.push(max)
    }

    //check if a number exists in both built arrays 
    for(let i = 0; i < minArray.length; i++){
        if(maxArray.indexOf(minArray[i]) !== -1){
            answer.push(minArray[i])
        }
    }
    
    //return array of numbers
    return answer

} 

console.log(luckyNumbers(matrix)) 