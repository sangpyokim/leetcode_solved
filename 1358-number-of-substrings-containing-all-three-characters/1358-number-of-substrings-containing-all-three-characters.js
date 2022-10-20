/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let res = 0
    const map = new Map()
    let left = 0, right = 0, count = 0
    const len = s.length
    
    while(right < len) {
        const cur = s[right]
        
        map.set(cur, map.get(cur) +1 || 1)
        
        while(map.size === 3) {
            count++
            const prev = s[left]
            map.set(prev, map.get(prev)-1)
            if (map.get(prev) === 0) map.delete(prev)
            left++
        }
        
        res += count
        right++
    }
    
    return res
};
