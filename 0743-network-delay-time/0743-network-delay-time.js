/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const list = Array.from({ length: n+1 }, () => new Array(n+1).fill(Infinity))  
    
    for (let [x, y, z] of times) {
        list[x][y] = z
    }
    for (let i = 1; i <= n; i++) {
        list[i][i] = 0
    }
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                list[i][j] = Math.min(list[i][j], list[i][k] + list[k][j])
            }
        }
    }

    let res = 0
    for (let i = 1; i <= n; i++) {
        if (list[k][i] === Infinity) return -1
        res = Math.max(res, list[k][i])
    }

    return res
};