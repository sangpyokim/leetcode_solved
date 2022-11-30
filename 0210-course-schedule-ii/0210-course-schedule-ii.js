var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => [])
    const visited = Array.from({ length: numCourses }, () => 0)
    const stack = []
    
    for (let [x, y] of prerequisites) {
        graph[x].push(y)
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && dfs(i)) return []
    }
    
    function dfs(node) {
        visited[node] = 1
        
        const nextNodes = graph[node]
        
        for (let nextNode of nextNodes) {
            if (visited[nextNode] === 1) return true
            if (visited[nextNode] === 0 && dfs(nextNode)) return true
        }
        
        visited[node] = 2
        stack.push(node)
        
        return false
    }
    return stack
};