/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    const graph = Array.from({length: n}, () => new Array(n).fill(Infinity))
    const list = Array.from({length: n}, () => new Array(n).fill(Infinity))
    
    for (let [x, y, z] of edges) {
        graph[x][y] = z
        graph[y][x] = z
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) list[i][j] = 0
            else if (graph[i][j]) list[i][j] = graph[i][j]
        }
    }
       
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                list[i][j] = Math.min(list[i][j], list[i][k] + list[k][j])
            }
        }
    }
    
    let min = Infinity
    let answer
    
    for (let i in list) {
        const arr = list[i]
        let count = 0
        for (let weight of arr) {
            if (weight !== 0 && weight <= distanceThreshold) count += 1
        }
        if (count <= min) answer = i
        min = Math.min(min, count)
    }
    
    return answer
};




