/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length
    let left = 0, right = 0;
    let sum = 0
    let answer = Infinity
    while(right < len) {
        const num = nums[right]
        sum += num
        if (sum >= target) {
            let prev = nums[left]
            while(sum - prev >= target) {
                sum -= prev
                
                left++
                prev = nums[left]
            }
            answer = Math.min(answer, right - left+1)
        }
        // console.log(left, right, sum)
        
        right++
        
    }
    
    return answer === Infinity ? 0 : answer
};