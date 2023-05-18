/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const res = []
    const list2 = Array.from({ length: n }, () => [])

    for (let [x, y] of edges) {
        list2[y].push(x)
    }

    
    for (let i = 0; i < n; i++) {
        if (list2[i].length === 0) {
            res.push(i)
        }
    }
    
    return res    
};