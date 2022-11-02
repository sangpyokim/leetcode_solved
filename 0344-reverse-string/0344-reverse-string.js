/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const len = s.length-1
    let arr = [...s]
    function recursion(i, char) {
        if (i > Math.floor(len/2)) return
        recursion(i+1, s[i+1])
        const temp = s[i]
        s[i] = s[len-i]
        s[len-i] = temp
    }
    recursion(0, s[0])
};