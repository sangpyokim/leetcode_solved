/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (n-1 > connections.length) return -1
    
    let enough = 0
    const par = Array.from({ length: n }, (v, i) => i)
    const find = (x) => x === par[x] ? x : par[x] = find(par[x])
    const union = (x, y) => {
        if (x > y) return union(y, x)
        x = find(x)
        y = find(y)
        par[y] = x
    }
    
    for (let [x, y] of connections) {
        if (find(x) === find(y)) enough += 1
        else union(x, y)
    }
    
    for (let i in par) {
        const x = par[i]
        par[i] = find(i)
    }
    
    const set = new Set(par)

    if (set.size -1 > enough) return -1
    
    return set.size - 1
};

