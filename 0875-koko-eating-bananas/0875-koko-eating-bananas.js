/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    piles.sort((a,b) => a-b)
    let left = 1, right = 0
    for (let pile of piles) {
        right = Math.max(right, pile)
    }
    
    while(left < right) {
        // 시간 당 먹는 개수
        const mid = (right + left) >> 1
        if (feasible(mid)) right = mid
        else left = mid +1
    }
    
    function feasible(mid) {
        let hours = 0
        for (let pile of piles) {
            hours += Math.ceil(pile / mid)
            if (hours > h) return false
        }
        
        return true
    }
    
    return left
};