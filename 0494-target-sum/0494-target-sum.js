/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let res = 0
    const len = nums.length
    
    function helper(L, sum) {
        if (L === len) {
            if (sum === target) res += 1
            return
        }
        
        helper(L+1, sum + nums[L])
        helper(L+1, sum - nums[L])
        
    }
    
    helper(0, 0)
    
    return res
};