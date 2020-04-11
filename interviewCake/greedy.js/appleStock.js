function maxProfit(stockPrices){

    maxProfits = 0 

    for(let i = 0; i < stockPrices.length-2; i++){
        for(let j = 1; j < stockPrices.length; j++){
            let profits = stockPrices[j] - stockPrices[i]
            maxProfits = Math.max(maxProfits, profits)
        }
    }
    return maxProfits
}

console.log(maxProfit([10, 7, 5, 8, 11, 9]))