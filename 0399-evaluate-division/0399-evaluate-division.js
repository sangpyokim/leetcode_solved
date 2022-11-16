/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const answer = []
    const graph = {}
    
    for (let i in equations) {
        const [x, y] = equations[i]
        const val = values[i]
        
        if (!graph[x]) graph[x] = []
        if (!graph[y]) graph[y] = []
        
        graph[x].push([y, val])
        graph[y].push([x, (1/val)])
    }

    for (let i in queries) {
        const [x, y] = queries[i]
        let val = -1
        if (graph[x] && graph[y]) {

            val = bfs(x, y, graph)
        }
        answer.push(val)
        
    }
    

    
    return answer
};

function bfs(start, end, graph) {
    if (start === end) return 1
    
    const q = [[start, 1]]
    const visited = new Set()
    while(q.length) {
        const len = q.length
        for (let i = 0; i < len; i++) {
            const [n, v] = q.shift()
            if (visited.has(n)) continue
            if (n === end) return v
            for (let i = 0; i < graph[n].length; i++) {
                const next = graph[n][i]
                const [node, val] = next
                q.push([node, v * val])
                visited.add(n)
            }
        }
    }
    return -1
}