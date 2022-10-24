/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let left = 1, right = Math.max(...nums)
    
    while(left < right) {
        const mid = (right + left) >> 1
        let count = 0
        
        for (let num of nums) {
            // 9 - 1 > 8 / 5
            count += Math.floor((num-1) / mid)
        }
        if (count <= maxOperations) right = mid
        else left = mid +1
    }
    return left
};