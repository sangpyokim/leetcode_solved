/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let left = 0, right = 0
    let sum = 0
    const map = new Map()
    let answer = 0
    for (right in nums) {
        const num = nums[right]
        
        sum += num
        
        map.set(num, map.get(num)+1 || 1)
        
        while(map.get(num) > 1) {
            map.set(nums[left], map.get(nums[left]) -1)
            sum -= nums[left]
            left++
        }
        // console.log(left, right, sum)
        answer = Math.max(answer, sum)
    }
    return answer
};