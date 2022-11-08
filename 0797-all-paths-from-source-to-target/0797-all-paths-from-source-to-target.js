/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = []
    const len = graph.length
    const visited = Array.from({ length: len }, () => false)

    const startNode = 0
    
    function helper(node, path) {
        if (node === len-1) return res.push([...path])
        
        if (visited[node]) return

        const nextNodes = graph[node]
        
        for (let nextNode of nextNodes) {
            path.push(nextNode)
            visited[node] = true
            helper(nextNode, path)
            path.pop()
            visited[node] = false
        }
        
        
        
    }
    
    helper(startNode, [0])
    
    
    
    return res
};