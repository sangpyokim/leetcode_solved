/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map(), len = s.length
    let answer = 0
    let left = 0, right = 0
    
    while(right < len) {
        const char = s[right]
        
        if(map.get(char)) left = Math.max(left, map.get(char))
        
        map.set(char, right+1)
        right++
        answer = Math.max(answer, right - left)
    }
    return answer
};