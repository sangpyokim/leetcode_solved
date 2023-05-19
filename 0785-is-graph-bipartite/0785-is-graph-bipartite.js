/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
    const color = Array.from({length: graph.length}, () => -1)
    
    for (let i = 0; i < graph.length; i++) {
        if (color[i] === -1) {
            if(!bfs(i, color, graph)) return false
        }
    }
    

    
    
    return true
};

function bfs(node, color, graph) {
    const q = [node]
    color[node] = 1
    
    while(q.length) {
        const cur = q.shift()
        
        for (let i of graph[cur]) {
            if (color[i] === -1) {
                q.push(i)
                color[i] = 1 - color[cur]
            } else if (color[i] == color[cur]) return false
        }
    }
    
    return true
}