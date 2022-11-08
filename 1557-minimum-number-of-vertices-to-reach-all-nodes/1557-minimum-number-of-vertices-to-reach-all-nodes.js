/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const res = []
    const list = Array.from({ length: n }, () => [])
    const list2 = Array.from({ length: n }, () => [])
    const visited = Array.from({ length: n }, () => false)

    for (let [x, y] of edges) {
        list[x].push(y)
        list2[y].push(x)
    }
    
    
    function helper(node) {
        if (visited[node]) return
        visited[node] = true
        
        const nextNodes = list[node]
        for (let i in nextNodes) {
            const nextNode = nextNodes[i]
            helper(nextNode)
        }
        
    }
    
    for (let i = 0; i < n; i++) {
        if (list2[i].length === 0 && visited[i] === false) {
            res.push(i)
            helper(i)
        }
    }
    
    return res    
};