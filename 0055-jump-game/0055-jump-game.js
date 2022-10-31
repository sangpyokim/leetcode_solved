/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const len = nums.length
    let pos = 0
    
    for (let i in nums) {
        if (pos < i) return false
        pos = Math.max(i*1 +nums[i], pos)
    }    
    
    return true
};
