/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let maxLen = Infinity
    let left = 0, right = 0;
    let sum = 0
    for (right; right < nums.length; right++) {
        const cur = nums[right]
        sum += cur
        
        while(sum >= target) {
            maxLen = Math.min(maxLen, right - left +1)
            sum -= nums[left]
            left++
        }

    }
    
    return maxLen === Infinity ? 0 : maxLen
};