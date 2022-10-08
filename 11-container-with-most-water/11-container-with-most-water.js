/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1
    let answer = 0
    
    while(left < right) {
        const l = height[left]
        const r = height[right]
        
        const h = Math.min(l, r)
        const w = right - left
        
        answer = Math.max(answer, h * w)
        
        l < r ? left++ : right--
        
    }
    
    
    return answer
};