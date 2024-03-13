/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0, j = 1 ;j < prices.length; j++) {
        let buy = prices[i];
        let sell = prices[j];
        let tempProfit = sell - buy;
        if (buy > sell) {
            i = j;
        }
        if (tempProfit > maxProfit) {
            maxProfit = tempProfit;
        }
    }
    return maxProfit
};