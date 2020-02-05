var highFive = function(item){

    grades = []

    //iterate over array and identify student id 
    studentId = 1 
   
    for(let i = 0; i < item.length; i++){
        // console.log(item[i])
        for(let j = 0; j < item[i].length; j++){
            if(item[i][0] = studentId) {
                results = []
                results.push(item[i][1])
                results.sort((function(a, b){return b-a}))
                console.log(results)

            }
        }
    }
}

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))