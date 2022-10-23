/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length-1
    
    while(left <= right) {
        const mid = (right + left) >> 1
        // console.log(mid)
        const cur = nums[mid]
        if (cur === target) return mid
        else if (cur < target) left = mid+1
        else right = mid-1
    }
    return left
};