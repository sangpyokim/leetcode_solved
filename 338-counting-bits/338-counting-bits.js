/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = []
    answer.push(0)
    for (let i = 1; i <= n; i++) {
        let count = 0
        let temp = i
        while(temp !== 0) {
            count += temp&1
            temp = temp >>> 1
            
        }
        answer.push(count)
    }
    return answer
};