/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    // 2^k -1
    const set = new Set()
    for (let i = 0; i <= s.length-k; i++) set.add(s.slice(i, i+k))
    return set.size === Math.pow(2, k)
};