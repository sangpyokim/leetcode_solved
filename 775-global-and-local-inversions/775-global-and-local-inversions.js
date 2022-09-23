/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    for (let i in nums){
        const num = nums[i]
        if (Math.abs(i - num) > 1) return false
    }
    
    return true
};