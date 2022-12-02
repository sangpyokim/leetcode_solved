/**
 * @param {number[][]} points
 * @return {number}
 */
function minCostConnectPoints(points) {
    const len = points.length
    const par = Array.from({ length: len }, (_, i) => i)
    const find = x => x === par[x] ? x : par[x] = find(par[x])
    const union = (x, y) => {
        if (x > y) return union(y, x)
        x = find(x)
        y = find(y)
        par[x] = y
    }
    let res = 0
    const edges = makeEdges(points, len)
    edges.sort((a,b) => a[2] - b[2])
    for (let [a,b, w] of edges) {
        if (find(a) !== find(b)) {
            union(a,b)
            res += w
        }        
    }
    
    return res
}

const makeEdges = (arr, n) => {
    const res = []
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            const [a,b] = arr[i]
            const [c,d] = arr[j]
            const temp = Math.abs(a - c) + Math.abs(b - d)
            res.push([i, j, temp])
        }
    }
    return res
} 
