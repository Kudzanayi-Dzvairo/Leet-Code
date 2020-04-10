function getMaxProfit(stockPrices) {
    let maxProfit = 0;
  
    // Go through every time
    for (let outerTime = 0; outerTime < stockPrices.length; outerTime++) {
  
      // For each time, go through every other time
      for (let innerTime = 0; innerTime < stockPrices.length; innerTime++) {
  
        // For each pair, find the earlier and later times
        const earlierTime = Math.min(outerTime, innerTime);
        const laterTime = Math.max(outerTime, innerTime);
  
        // And use those to find the earlier and later prices
        const earlierPrice = stockPrices[earlierTime];
        const laterPrice = stockPrices[laterTime];
  
        // See what our profit would be if we bought at the
        // min price and sold at the current price
        const potentialProfit = laterPrice - earlierPrice;
  
        // Update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);
      }
    }
  
    return maxProfit;
  }
  