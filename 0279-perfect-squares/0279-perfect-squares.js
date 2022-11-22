/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
        const table = new Array(n+1)
    
    table[0] = 0
    table[1] = 1
    
    for (let i = 2; i <= n; i++) {
        table[i] = i
        
        let j = 1
        while (j*j <= i) {
            table[i] = Math.min(table[i], table[i-j*j]+1) 
            j++
        }
    }
    return table[n]
};