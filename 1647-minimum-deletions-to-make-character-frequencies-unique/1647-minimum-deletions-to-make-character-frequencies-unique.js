/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const map = new Map()
    const answer = new Set()
    let res = 0
    for (let char of s) {
        map.set(char, map.get(char)+1 || 1)
    }
    
    for (let [k, v] of map) {
        if (answer.has(v)) {
            for (let i = v; i > 0; i--) {
                if (!answer.has(i)) {
                    answer.add(i)
                    break
                } else{
                    res++
                }
            }     
            
        } else {
            answer.add(v)
        }
        
    }
    
    return res
};