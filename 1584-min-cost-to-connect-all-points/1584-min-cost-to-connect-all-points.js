function minCostConnectPoints(points) {
    const len = points.length;
    const pq = new MinPriorityQueue({priority: ([cost]) => cost});
    const visited = new Array(len).fill(false);
    let totalCost = 0, connections = 0, current = 0;

    while (++connections < len) {
        visited[current] = true;
        for (const [cost, neighbor] of uniqueConnections(current)) {
            pq.enqueue([cost, neighbor]);
        }
        while (visited[pq.front().element[1]]) {
            pq.dequeue();
        }
        const [cost, node] = pq.dequeue().element;
        totalCost += cost;
        current = node;
    }
    return totalCost;
    
    function uniqueConnections(curr) {
	    const res = []			
        for (let i = 0; i < len; i++) {
            if (i === curr || visited[i]) continue;
            res.push([dist(points[curr], points[i]), i])
        }
        return res
    }
};

function dist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}