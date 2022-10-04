var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let left = 0, right = 0;
    let maxLen = 0
    
    for (right; right < s.length; right++) {
        const cur = s[right]
        
        if (map.has(cur)) left = Math.max(left, map.get(cur) + 1)
        map.set(cur, right)
        maxLen = Math.max(maxLen, right - left + 1)
    }
    
    return maxLen
};  