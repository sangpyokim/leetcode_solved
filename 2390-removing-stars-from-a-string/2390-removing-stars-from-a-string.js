/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let temp = s.split('').reverse()
    
    let count = 0
    for (let i in temp) {
        const char = temp[i]
        if (char === '*') count++
        else {
            if (count > 0) {
                temp[i] = '*'
                count--
            }
        }
        
    }
    let answer = ''
    const str = temp.reverse().join('')
    for (let char of str) {
        if (char !== '*') answer += char
    }
    
    return answer
};