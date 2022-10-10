function trap(height) {
    if (height == null || height.length === 0) return 0;
    
    let left = 0, right = height.length-1
    let lMax = 0, rMax = 0;
    let answer = 0
    while(left < right) {
        const l = height[left]
        lMax = Math.max(lMax, l)
        if (l < lMax) answer += lMax - l
        
        const r = height[right]
        rMax = Math.max(rMax, r)
        if (r < rMax) answer += rMax - r
        
        lMax < rMax ? left++ : right--
    }
    
    return answer
}