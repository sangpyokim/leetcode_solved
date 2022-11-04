/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const answer = []
    const len = candidates.length
    candidates.sort()
    const helper = (L, sum, arr) => {
        if (sum > target) return
        if (sum === target) return answer.push([...arr])
        
        for (let i = L; i < len; i++) {
            if (i > L && candidates[i] === candidates[i-1]) continue
            const num = candidates[i]
            arr.push(num)
            helper(i+1, sum+num, arr)
            arr.pop()
        }
        
        
    }
    helper(0, 0, [])
    
    return answer
};