/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    let answer = -Infinity
    const len = satisfaction.length
    satisfaction.sort((a,b) => a-b)
    
    let left = 0, right = len
    
    while(left < right) {
        const mid = (right + left) >>> 1
        
        const l = getpoint(mid)
        const r = getpoint(mid + 1)

        if (l > r) {
            answer = Math.max(answer, l)
            right = mid
        } else {
            answer = Math.max(answer, r)
            left = mid + 1 
        }

    }
    function getpoint(mid) {
        let res = 0
        let j = 1
        for (let i = mid; i < len; i++) {
            res += (satisfaction[i] * j)
            j += 1
        }
        return res
    }
    return answer < 0 ? 0 : answer
};