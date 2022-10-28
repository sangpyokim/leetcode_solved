/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const answer = []
    const len = nums.length
    
    function dfs(L, set, arr) {
        if (L === len) return answer.push(arr)
        
        for (let num of nums) {
            if (!set.has(num)) {
                set.add(num)
                dfs(L+1, set, [...arr, num])
                set.delete(num)
            }
        }
    }
    dfs(0, new Set(), [])
    
    return answer
};