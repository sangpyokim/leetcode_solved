/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    const len = colsum.length
    const top = []
    let topBit = 0
    const bottom = []
    let bottomBit = 0
    
    
    for (let i = 0; i < len; i++) {
        if (colsum[i] === 2) {
            top.push(1)
            bottom.push(1)
            topBit++
            bottomBit++
        } 
        else if (colsum[i] === 1) {
            const up = upper - topBit
            const bo = lower - bottomBit
            if (up > bo) {
                top.push(1)
                bottom.push(0)
                topBit++
            } else {
                top.push(0)
                bottom.push(1)
                bottomBit++
            }
        } 
        else {
            top.push(0)
            bottom.push(0)
        }
                
        if (topBit > upper) return []
        if (bottomBit > lower) return []
    }
    if (topBit !== upper || bottomBit !== lower) return []
    return [top, bottom]
};