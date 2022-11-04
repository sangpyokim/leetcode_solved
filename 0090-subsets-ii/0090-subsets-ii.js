/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = []
    const len = nums.length
    nums.sort((a,b) => a-b)
    function helper(L, arr) {

        res.push([...arr])
        
        for (let i = L; i < len; i++) {
            if (L < i && nums[i] === nums[i-1]) continue
            const num = nums[i]
            arr.push(num)
            helper(i+1, arr)
            arr.pop()
        }
        
    }
    
    helper(0, [])
    
    return res
};