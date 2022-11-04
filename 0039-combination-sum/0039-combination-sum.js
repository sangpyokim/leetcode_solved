/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = []
    const len = candidates.length
    
    const helper = (L, sum, arr) => {
        if (sum > target) return
        if (sum === target) return answer.push([...arr])
        
        for (let i = L; i < len; i++) {
            const num = candidates[i]
            arr.push(num)
            helper(i, sum+num, arr)
            arr.pop()
        }
        
        
    }
    helper(0, 0, [])
    
    return answer
};