/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function(n, edges) {
    const graph = Array.from({ length: n+1 }, () => [])
    const dist = Array.from({ length: n+1 }, () => Infinity)
    for (let [x, y, z] of edges) {
        graph[x].push([y, z])
        graph[y].push([x, z])
    }

    const pq = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] })
    pq.enqueue([0, n]) // 가중치, 노드
    dist[n] = 0

    while(!pq.isEmpty()) {
        const [curWeight, curNode] = pq.dequeue()
        const nextNodes = graph[curNode]
        
        // if (curWeight > dist[curNode]) continue
        
        for (let [nextNode, nextWeight] of nextNodes) {
            const sumWeight = curWeight + nextWeight
            if (dist[nextNode] > sumWeight) {
                dist[nextNode] = sumWeight
                pq.enqueue([sumWeight, nextNode])
            }
        }
    }
    // console.log(dist)
    
    const nodeToNumPaths = {};
    const dfs = (node) => {
        if (node === n) return 1;
        if (nodeToNumPaths.hasOwnProperty(node)) {
            return nodeToNumPaths[node];
        }
        let count = 0;
        for (const [neighbor, weight] of graph[node]) {
            if (dist[node] > dist[neighbor]) {
                count += dfs(neighbor);
            }
        }
        return nodeToNumPaths[node] = count % 1000000007;
    }
    
    return dfs(1);
};
//{ '1': 4, '2': 2, '3': 1, '4': 6, '5': 0 }
