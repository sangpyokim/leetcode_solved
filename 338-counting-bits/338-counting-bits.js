/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) return [0]
    const answer = Array.from({length: n}, () => 0)
    
    let offset = 1
    for (let i = 1; i <= n; i++) {
        if (i === offset * 2) offset = i
        
        answer[i] = 1 + answer[i - offset]
    }
    return answer
};