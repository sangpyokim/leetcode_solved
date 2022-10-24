/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length-1
    
    while(left < right) {
        const mid = (right + left) >> 1
        
        const cur = nums[mid]
        const next = nums[mid+1]
        
        if (cur > next) right = mid
        else left = mid+1
    }
    
    return left
};