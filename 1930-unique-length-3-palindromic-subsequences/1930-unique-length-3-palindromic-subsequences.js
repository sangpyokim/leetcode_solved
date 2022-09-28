var countPalindromicSubsequence = function(s) {
    const left = []
    const right = []
    
    for (let i in s) {
        const char = s[i]
        if (left[char] === undefined) left[char] = i
        else right[char] = i
    }
    
    const set = new Set()
    for (let l in left) {
        for (let r in right) {
            
            for (let i = left[l]*1 + 1; i < right[r] && l === r; i++) {
                set.add(l + s[i] + r)
            }
            
        }
    }
        
    return set.size
}
