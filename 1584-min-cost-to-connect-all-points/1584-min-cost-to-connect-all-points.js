class DSU {
    ranks;
    parents;
    
    constructor(length) {
        this.ranks = new Array(length).fill(1);
        this.parents = Array.from({length}, (_, idx) => idx);
    }
    
    find(x) {
        if (x !== this.parents[x]) {
            this.parents[x] = this.find(this.parents[x]);
        }
        return this.parents[x];
    }
    
    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        
        if (x === y) {
            return false;
        }
        if (this.ranks[x] < this.ranks[y]) {
            [x, y] = [y, x];
        }
        this.ranks[x] += this.ranks[y];
        this.parents[y] = x;
        
        return true;
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
function minCostConnectPoints(points) {
    const connections = uniqueConnections(points);
    connections.sort((a, b) => a[2] - b[2]);
    const par = Array.from({ length: points.length }, (_, i) => i)
    const find = x => x === par[x] ? x : par[x] = find(par[x])
    const union = (x, y) => {
        if (x > y) return union(y, x)
        x = find(x)
        y = find(y)
        
        par[x] = y
    }
    
    let totalCost = 0;
    for (const [a, b, cost] of connections) {
        if (find(a) !== find(b)) {
            union(a, b)
            totalCost += cost;
        }
    }
    return totalCost;
}

function uniqueConnections(arr) {
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            res.push([i, j, dist(arr[i], arr[j])])
        }
    }
    return res
}

function dist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}