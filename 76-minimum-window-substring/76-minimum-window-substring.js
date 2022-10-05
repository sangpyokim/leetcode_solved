/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// O(n * m): n == s.length, m == t.length
var minWindow = function(s, t) {
    let answer = []

    const TMap = new Map()
    for (let char of t) {
        TMap.set(char, TMap.get(char) + 1 || 1)
    }
    // console.log(TMap)
    const len = s.length
    let left = 0, right = 0;
    let maxLen = Infinity;
    
    for (right; right < len; right++) {
        const cur = s[right]
        
        if (TMap.has(cur)) TMap.set(cur, TMap.get(cur) -1)
        
        
        while(overlapCheck()) {
            if (maxLen > right - left +1) {
                maxLen = right - left +1
                answer = [left, right]
            }
            
            let prev = s[left]
            if (TMap.has(prev)) TMap.set(prev, TMap.get(prev) + 1)
            left++
            
        }
    }
    
    function overlapCheck() {
        let res = true
        for (let [k, v] of TMap) {
            if (v > 0) return false
        }
        return res
    }
    
    if (answer.length === 0) return ''
    
    return s.slice(answer[0], answer[1]+1)
};