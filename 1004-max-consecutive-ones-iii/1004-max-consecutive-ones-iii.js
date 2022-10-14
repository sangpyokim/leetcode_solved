/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, right = 0;
    let count = 0
    
    for (right in nums) {
        const num = nums[right]
        // num이 0일때 k--
        if (num === 0) k--
        // num이 1일때 아무일없음
        
        // k 0이하가 되면 left증가, //left의 값이 0,1 일때
        if (k < 0) {
            
            if (nums[left] === 0) k++
                
            left++
        }
        
    }
    return right - left+1
};