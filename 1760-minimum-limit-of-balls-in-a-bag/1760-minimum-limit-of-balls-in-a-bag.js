/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1, right = Math.max(...nums)
    
    while(left < right) {
        const mid = (right + left) >> 1
        
        if (helper(mid)) right = mid
        else left = mid +1
    }
    
    function helper(mid) {
        let res = true
        let count = 0
        for (let num of nums) {
            count += Math.floor((num-1) / mid)
            if (count > maxOperations) return false
        }
        
        return res
    }
    
    return left
};