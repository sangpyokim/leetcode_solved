/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const set = new Set() // value: 0,0: string
    set.add(`0,0`)
    let cur = [0,0]
    
    for (let char of path) {
        if (char === "N") {
            cur[1]++
        }
        else if (char === "S") {
            cur[1]--
        }
        else if (char === "E") {
            cur[0]++
        }
        else {
            cur[0]--
        }
        
        if (set.has(`${cur[0]},${cur[1]}`)) return true
        set.add(`${cur[0]},${cur[1]}`)
    }
    
    return false
};