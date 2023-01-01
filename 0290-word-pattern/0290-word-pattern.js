/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const arr = s.split(' ');
    if(pattern.length != arr.length) return false
    for (let x in pattern) {
        if (!map.has(pattern[x]) ) {
            map.set(pattern[x], arr[x])
        } else {

            if ( map.get(pattern[x]) != arr[x] ) {
                return false
            }
        }
    }
    return new Set([...map.values()]).size === map.size
};