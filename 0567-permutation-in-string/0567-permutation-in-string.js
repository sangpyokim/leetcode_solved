/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = new Map()
    const k = s1.length
    for (let char of s1) {
        map.set(char, map.get(char) + 1 || 1)
    }
    let left = 0
    for (let right in s2) {
        const char = s2[right]
        const prev = s2[left]
        if (right - left+1 > k) {
            left++
            if (map.has(prev)) map.set(prev, map.get(prev)+1)
        }
        
        if (map.has(char)) map.set(char, map.get(char) -1)
        if (check()) return true
    }
    
    function check() {
        let res = true
        for (let [k, v] of map) {
            if (v !== 0) return false
        }
        return res
    }
    
    return false
};