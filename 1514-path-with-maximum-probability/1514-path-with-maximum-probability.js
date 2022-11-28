var maxProbability = function(n, edges, succProb, start, end) {
    const MIN = Number.MIN_SAFE_INTEGER;
    const m = edges.length;
	
    const graph = {};
    const distance = new Array(n).fill(MIN);
    
    for (let i in edges) {
        const [s, e] = edges[i]
        const w = succProb[i]
        if (!graph[s]) graph[s] = []
        if (!graph[e]) graph[e] = []
        graph[s].push([e, w])
        graph[e].push([s, w])
    }

    const pq = new MaxPriorityQueue({ compare: (x, y) => x[1] < y[1]})
    distance[start] = 1
    pq.enqueue([start, 1])
    
    while(!pq.isEmpty()) {
        const [curNode, curWeight] = pq.dequeue()
        if (curNode === end) return curWeight

        const nextNodes = graph[curNode]
        if (!nextNodes || distance[curNode] > curWeight) continue

        for (let [nextNode, nextWeight] of nextNodes) {
            const sumWeight = curWeight * nextWeight
            if (distance[nextNode] < sumWeight) {
                distance[nextNode] = sumWeight
                pq.enqueue([nextNode, sumWeight])
            }
        }
    }
    
    
    return distance[end] === MIN ? 0 : distance[end]
};