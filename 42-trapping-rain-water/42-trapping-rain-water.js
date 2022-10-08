function trap(height) {
    if (height == null || height.length === 0) return 0;
    
    let left = 0, right = height.length-1
    let lMax = 0, rMax = 0
    let answer = 0
    
    
    while(left < right) {
        const l = height[left]
        const r = height[right]
        
        lMax = Math.max(lMax, l)
        if (lMax > l) answer += lMax - l
        
        rMax = Math.max(rMax, r)
        if (rMax > r) answer += rMax - r
        
        l < r ? left++ : right--
    }
    
    
    return answer
}