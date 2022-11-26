/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const len = stones.length
    const par = Array.from({ length: len }, (v, i) => i)
    const find = (x) => x === par[x] ? x : par[x] = find(par[x])
    const union = (x, y) => {
        if (x > y) return union(y, x)
        x = find(x)
        y = find(y)
        par[y] = x
    }
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    
    for (let i = 0; i < len; i++) {
        const [a, b] = stones[i]
            
        for (let j = i+1; j < len; j++) {
            const [c, d] = stones[j]
            let check = false
            if (check) continue
            if (a === c || b === d) {
                union(i, j)
                check = true
            }                
        }
    }
    for (let i in par) {
        par[i] = find(par[i])
    }
    const set = new Set(par)
    
    return len - set.size
};