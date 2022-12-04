/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const mod = 1e9 + 7
var countPaths = function(n, roads) {
    const graph = Array.from({ length: n }, () => [])
    
    for (let [x, y, z] of roads) {
        graph[x].push([y, z])
        graph[y].push([x, z])
    }
    
    const pq = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1]})
    const dist = Array.from({ length: n }, () => Infinity)
    let ways = Array.from({ length: n }, () => 0)
    
    dist[0] = 0
    ways[0] = 1
    pq.enqueue([0,0])
    
    while(!pq.isEmpty()) {
        const [curNode, curWeight] = pq.dequeue()
        
        if (dist[curNode] < curWeight) continue
        
        const nextNodes = graph[curNode]
        for (let [nextNode, nextWeight] of nextNodes) {
            const sumWeight = curWeight + nextWeight
            
            if (dist[nextNode] === sumWeight) { // 다른 경로지만 가중치는 같을 때
                ways[nextNode] += ways[curNode]
                ways[nextNode] %= mod
            }
            else if (dist[nextNode] > sumWeight) { // 최단거리일때
                dist[nextNode] = sumWeight
                ways[nextNode] = ways[curNode]
                pq.enqueue([nextNode, sumWeight])
            }
        }
    }
    return ways[n - 1];
};