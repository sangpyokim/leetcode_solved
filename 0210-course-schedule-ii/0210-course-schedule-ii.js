var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => [])
    const inDegree = Array.from({ length: numCourses }, () => 0)
    const q = []
    const res = []
    
    for (let [x, y] of prerequisites) {
        graph[y].push(x)
        inDegree[x] += 1
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) q.push(i)
    }
    
    let prereq = 0
    while(q.length) {
        const cur = q.shift()
        prereq += 1
        if (inDegree[cur] === 0) res.push(cur)
        
        const nextNodes = graph[cur]
        
        for (let nextNode of nextNodes) {
            inDegree[nextNode] -= 1
            if (inDegree[nextNode] === 0) {
                q.push(nextNode)
            }
        }
    }
    
    return prereq === numCourses ? res : []
};