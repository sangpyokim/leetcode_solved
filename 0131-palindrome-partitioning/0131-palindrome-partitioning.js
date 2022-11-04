/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const answer = []
    const len = s.length
    
    const helper = (L, arr) => {
        if (L === len) {
            return answer.push([...arr])
        }
        
        for (let i = L; i < len; i++) {

            if (isPalindrome(s, L, i)) {
                arr.push(s.substring(L, i+1))
                
                helper(i+1, arr)
                arr.pop()
            }
        }
    }
        
    const isPalindrome = (str, left, right) => {
        while(left < right) {
            if (str[left++] !== str[right--]) return false
        }
        return true
    }
    
    helper(0, [])
    
    return answer
};
