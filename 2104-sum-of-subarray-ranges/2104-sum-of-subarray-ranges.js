/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    const len = nums.length
    if (len === 1) return 0
    
    let answer = 0
    let max, min
    for (let i = 0; i < len; i++) {
        let sum = 0
        max = -Infinity
        min = Infinity
        for (let j = i; j >= 0; j--) {
            if (max < nums[j]) max = nums[j]
            if (min > nums[j]) min = nums[j]
            
            answer += max - min
        }
    }
    
    
    
    return answer
};
// 