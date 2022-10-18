/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let answer = 0
    
    let left = 0, right = 0, score = 0, sum = 0
    const len = nums.length
    
    while(right < len) {
        const cur = nums[right]
        
        sum += cur
        score = sum * (right-left+1)
        
        while(score >= k) {
            const prev = nums[left]
            left++
            
            sum -= prev
            score = sum * (right-left+1)
            
            
        }
        answer += right - left + 1;
        // console.log(left, right, sum, score, answer)        
        right++
    }

    
    
    return answer
};
// 2 3 4 * 3 => 27
// 3 4 * 2 => 14
// 길이로 나누기 -> 빼기 -> 길이 곱하기