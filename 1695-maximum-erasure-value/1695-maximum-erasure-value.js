/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let max = 0
    
    const map = new Map()
    const len = nums.length;
    let left = 0, sum = 0;

    for (let right = 0; right < len; right++) {
        const cur = nums[right]
        sum += cur
        map.set(cur, map.get(cur) + 1 || 1)
        if (map.get(cur) > 1) {
            while( map.get(cur) > 1) {
                const temp = nums[left]
                sum -= temp
                if (map.get(temp) > 1) map.set(temp, map.get(temp) - 1)
                else map.delete(temp)
                left++
                console.log("A")
            }

        }
        max = Math.max(max, sum)
    }
    
    return max
};