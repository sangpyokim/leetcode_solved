/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let d = s.length
    let i = 0
    let res = []
    for (let char of s) {
        if (char === 'D') {
            res.push(d)
            d--
        } else {
            res.push(i)
            i++
        }
    }

    if (s[s.length-1] === 'I') res.push(i)
    else res.push(d)
    
    return res
};