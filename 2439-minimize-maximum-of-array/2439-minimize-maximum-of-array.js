/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let sum = 0
    let m = 0
    
    for (let i in nums) {
        sum += nums[i]
        m = Math.max(Math.ceil(sum / ((i*1) + 1)), m)
    }
    
    return m
};