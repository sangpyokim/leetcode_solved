/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1, right = Math.max(...nums)
    
    while(left < right) {
        const mid = (right + left) >> 1
        
        const count = helper(mid)
        if (count <= threshold) right = mid
        else left = mid+1
        
    }
    
    function helper(mid) {
        let count = 0
        for (let num of nums) {
            count += Math.ceil(num / mid)
        }
        return count
    } 
    return left
};