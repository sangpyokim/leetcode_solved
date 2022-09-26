/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const map = new Map()
    const len = nums.length
    let answer = 0
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            const a = nums[i]
            const b = nums[j]
            if (map.has(a*b)) answer += map.get(a*b) * 8
            map.set(a*b, map.get(a*b) + 1 || 1)
        }
    }
    
    return answer
};
