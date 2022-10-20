/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
};
function atMost(nums, k) {
    let res = 0, left = 0, right = 0, len = nums.length
    
    while(right < len) {
        k -= nums[right] % 2
        
        while(k < 0) {
            k += nums[left++] % 2
        }
        
        res += right - left +1
        
        right++
    }
    
    return res
}
