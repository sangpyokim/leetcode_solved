/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = []
    const len = nums.length
    
    function helper(L, arr) {

        res.push([...arr])
        
        for (let i = L; i < len; i++) {
            const num = nums[i]
            arr.push(num)
            helper(i+1, arr)
            arr.pop()
        }
        
    }
    
    helper(0, [])
    
    return res
};
