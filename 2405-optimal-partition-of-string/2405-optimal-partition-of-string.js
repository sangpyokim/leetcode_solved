/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const set = []
    const len = s.length
    let left = 0
    for (let right = 0; right <= len; right++) {
        const str = s.slice(left, right+1)
        const temp = new Set([...str])
        
        if (str.length !== temp.size) {

            set.push(s.slice(left, right))
            left = right
        } else {
            
        }

    }

    return set.length+1
};