/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // 인접리스트
    let res = false
    // 1. 인접리스트 초기화
    const graph = {}
    const visited = Array.from({length: n}, () => false)
    
    for (let [x, y] of edges) {
        if (!graph[x]) {
            graph[x] = []
        }
        if (!graph[y]) {
            graph[y] = []
        }
        graph[x].push(y)
        graph[y].push(x)
    }
    
    function helper(node){
        if (visited[node]) return
        visited[node] = true
        if (node === destination) return res = true
        
        for (let x of graph[node]) {
            helper(x)
        }
    }
    helper(source)
    
    
    return res
};