/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let answer = Infinity
    let max = 0
    let sum = 0
    for (let weight of weights) {
        max = Math.max(max, weight)
        sum += weight
    }
    
    while (max < sum) {
        // 최대 중량
        const mid = (max+sum) >> 1
        

        if (fea(mid)) {
            sum = mid
        } else {
            max = mid+1
        }
    }
    
    function fea(mid) {
        let d = 1, s = 0
        
        for (let weight of weights) {
            s += weight
            if (s > mid) {
                d += 1
                s = weight
            } 
            if (d > days) return false
        }
        return true
    }
    
    
    return max
};