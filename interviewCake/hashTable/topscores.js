function sortScores(unorderdScores, highestPossibleScore){

    //Array of 0s at indcies 0..highestPossible
    const scoreCounts = new Array(highestPossibleScore +1).fill(0)

    //populate score counts
    unorderdScores.forEach(score =>{

        scoreCounts[score]++
    })

    //populate the final sorted array
    const sortedScores = []

    //for each item in scoreCounts
    for(let score = highestPossibleScore; score >=0 ; score--){
        const count = scoreCounts[score]


        for(let time = 0; time < count; time++){
            sortecScores.push(score)
        }
    }

    return sortedScores
}