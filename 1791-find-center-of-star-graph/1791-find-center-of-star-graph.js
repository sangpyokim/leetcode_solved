/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let len = Math.max(...edges.flat())
    const list = Array.from({length: len+1}, () => [])
    for (let [x, y] of edges) {
        list[x].push(y)
        list[y].push(x)
    }
    
    for (let i in list) {
        if (i === 0) continue
        else {
            if (list[i].length > 1) return i
        }
    }
    
};