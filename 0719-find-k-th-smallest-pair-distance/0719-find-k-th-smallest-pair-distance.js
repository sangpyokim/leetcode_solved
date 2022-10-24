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
        if (helper(mid)) left = mid+1
        else right = mid
    }
    
    function helper(mid) {
        let res = true
        let count = 0, i = 0, j = 0
        // 이중포문이랑 뭐가 다르지...
        while(i < len || j < len) {
            while(j < len && nums[j] - nums[i] <= mid) j += 1
            
            count += j - i - 1
            i += 1
            
            if (count >= k) return false
        }
        return res
    }
    
    return left
};