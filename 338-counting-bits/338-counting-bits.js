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

// 0 1 10 11 100 101 110 111
// 0 1. 2. 3. 4.  5.  6.  7
// 1 1. 2. 2. 4.  4.  4.  4
// 0 1  2. 2
// 0 1. 1. 2. 1.  2.  2.  3