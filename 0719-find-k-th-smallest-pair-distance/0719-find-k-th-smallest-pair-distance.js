/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a,b) => a-b)
    const len = nums.length
    let left = 0, right = nums[len-1] - nums[0]
    
    while(left < right) {
        const mid = (right + left) >> 1
        if (!helper(mid)) left = mid+1
        else right = mid
    }
    
    function helper(mid) {
        let count = 0, i = 0, j = 0
        while(i < len || j < len) {
            while(j < len && nums[j] - nums[i] <= mid) j += 1
            
            count += j - i - 1
            i += 1
        }
        return count >= k
    }
    
    return left
};