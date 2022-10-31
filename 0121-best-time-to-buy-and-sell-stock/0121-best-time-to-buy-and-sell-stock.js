/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity, max = 0
    
    for (let i in prices) {
        const price = prices[i]
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }
    
    return max
};