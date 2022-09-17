/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let answer = 0
    let count = -1


    
    let i = 0
    while(i < s.length) {
        const char = s[i]
        
        if (char === ')') {
            answer+= Math.pow(2,count)
            while(s[i] === ')') {
                i++
                count--
            }
            
        } else {
            count++
            i++
        }

    }
    
    return answer
};