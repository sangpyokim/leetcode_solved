/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, right = 0;
    let count = 0
    for (right in nums) {
        const num = nums[right]
        
        if (num === 0) count++
        
        if (count > 1) {
            if (nums[left] === 0) count--
            left++
        }
    }
    return right - left
};