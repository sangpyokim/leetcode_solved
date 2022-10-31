/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0, max = 0
    for (let num of nums) {
        if (num === 1) {
            count++
            max = Math.max(max, count)
        }
        else count = 0
    }
    
    return max
};