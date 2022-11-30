var findOrder = function(numCourses, prerequisites) {
    
    const list = Array.from({ length: numCourses }, () => [])
    const visited = Array.from({ length: numCourses }, () => 0)
    const stack = []
    
    for (let [x, y] of prerequisites) {
        list[x].push(y)
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0 && dfs(i)) return []
    }
    
    function dfs(node) {
        visited[node] = 1
        
        for (let x of list[node]) {
            if (visited[x] === 1) return true
            if (visited[x] === 0 && dfs(x)) return true
        }
        
        visited[node] = 2
        stack.push(node)
        return false
    }

    return stack
};