var findOrder = function(numCourses, prerequisites) {
    
    const list = Array.from({ length: numCourses }, () => [])
    const indegree = Array.from({ length: numCourses }, () => 0)
    const q = []
    const topoSort = []
    for (let [x, y] of prerequisites) {
        list[y].push(x)
        indegree[x] += 1
    }
    
    for (let i in indegree) {
        const x = indegree[i]
        if (x === 0) {
            q.push(i*1)
        }
    }
    
    
    
    let prereq = 0
    while(q.length > 0) {
        const cur = q.shift()
        prereq += 1
        if (indegree[cur] === 0) topoSort.push(cur)
        
        const nextNodes = list[cur]
        for (let nextNode of nextNodes) {
            if (--indegree[nextNode] === 0) {
                q.push(nextNode)
            }
        }
    }

    return prereq === numCourses ? topoSort : []
};