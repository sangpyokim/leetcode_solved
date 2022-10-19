/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const set = new Set()
    const answer = []
    nums.sort((a,b) => a-b)
    
    const len = nums.length
    let left = 0, right = len-1, mid = left+1
    
    while(left < len-2) {
        right = len-1
        mid = left+1
        
        while(mid < right) {
            let sum = nums[left] + nums[mid] + nums[right]
            
            if (sum === 0) {
                const str = `${nums[left]}${nums[mid]}${nums[right]}`
                
                
                if (!set.has(str)) {
                    set.add(str)
                    answer.push([nums[left], nums[mid], nums[right]])
                }
                right--
                mid++
                // break;
            } else if (sum > 0) {
                right--
            } else {
                mid++
            }
        }

        left++
    }
    
    return answer
};