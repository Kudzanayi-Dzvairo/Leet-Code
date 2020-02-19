var highFive = function(items){
    let studentObj = {}
    let averages = []

    items.forEach(score => {
        if(studentObj.hasOwnProperty(score[0])){
            studentObj[score[0]].push(score[1])
        } else { 
            studentObj[score[0]] = [score[1]]
        }
    })

    Object.entries(studentObj).forEach(student => {
        
        let sum = 0 
        student[1].sort((a, b) => b - a)
        

        for (let i = 0; i <= 4; i++){
            sum += student[1][i]
        }

        averages.push([parseInt(student[0]), Math.floor(sum/5)])


    })

    return averages
}



console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))