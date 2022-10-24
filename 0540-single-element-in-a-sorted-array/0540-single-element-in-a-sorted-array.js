/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length-1
    
    while(left < right) {
        const mid = (right + left) >> 1
        const cur = nums[mid]
        const next = nums[mid+1]

        if (helper(mid)) left = mid+1
        else right = mid
    }
    function helper(mid) {
        if (mid % 2 === 0) {
            return nums[mid + 1] === nums[mid];
        } else {
            return nums[mid + 1] !== nums[mid];
        }
    }
    return nums[left]
};
