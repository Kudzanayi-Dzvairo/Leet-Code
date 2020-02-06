var highFive = function(items){

    const dictionary = items.reduce((acc, cur) => {
        const key = cur[0];
        const val = cur[1];
    
        if (acc[key]) {
            acc[key].push(val);
        } else {
            acc[key] = [val]
        }
    
        console.log(acc);
    }, {})
}

console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]))