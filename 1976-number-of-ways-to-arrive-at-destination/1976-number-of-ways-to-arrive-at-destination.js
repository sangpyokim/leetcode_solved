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
    let ways = Array(n).fill(0);
    
    dist[0] = 0
    ways[0] = 1
    pq.enqueue([0,0])
    
    while(!pq.isEmpty()) {
        const [curNode, curWeight] = pq.dequeue()
        
        if (dist[curNode] < curWeight) continue
        
        const nextNodes = graph[curNode]
        for (let [nextNode, nextWeight] of nextNodes) {
            const sumWeight = curWeight + nextWeight
            if (dist[nextNode] === sumWeight) {
                ways[nextNode] += ways[curNode]
                ways[nextNode] %= mod
            }
            else if (dist[nextNode] > sumWeight) {
                dist[nextNode] = sumWeight
                ways[nextNode] = ways[curNode]
                pq.enqueue([nextNode, sumWeight])
            }
        }
    }
    return ways[n - 1];
};
// const dijkstra = (n, g, source) => { // g: adjacent graph list, n: total vertices
//     let dist = Array(n).fill(Number.MAX_SAFE_INTEGER);
//     let ways = Array(n).fill(0);
//     const pq = new MinPriorityQueue({ priority: x => x[0] * 200 + x[1] });
//     dist[0] = 0;
//     ways[0] = 1;
//     pq.enqueue([0, source]);
//     while (pq.size()) {
//         let cur = pq.dequeue().element;
//         let [curCost, curNode] = cur;
//         if (dist[curNode] != curCost) continue;
//         for (const [node, cost] of g[curNode]) { // parse neighbour node
//             let newDis = curCost + cost;
//             if (newDis == dist[node]) {
//                 ways[node] += ways[curNode];
//                 ways[node] %= mod;
//             } else if (newDis < dist[node]) {
//                 dist[node] = newDis;
//                 ways[node] = ways[curNode];
//                 pq.enqueue([dist[node], node]);
//             }
//         }
//     }
    
// };