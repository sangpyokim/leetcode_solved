/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const answer = []
    const len = nums.length
    
    nums.sort((a,b) => a-b)
    
    function dfs(set, arr, used) {
        if (arr.length === len) return answer.push([...arr])
        
        for (let i = 0; i < len; i++) {
            if (used[i] || i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue
            const num = nums[i]
            
            used[i] = true
            arr.push(num)
            dfs(set, arr, used)
            used[i] = false
            arr.pop(num)
        }
        
    }
    
    dfs(new Set(), [], new Array(len).fill(false))
    
    return answer
};