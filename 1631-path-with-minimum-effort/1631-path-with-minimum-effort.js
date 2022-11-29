/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const row = heights.length
    const col = heights[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]

    
    const distance = Array.from({ length: row }, () => new Array(col).fill(Infinity))
    distance[0][0] =0
    const pq = new MinPriorityQueue({ compare: (a, b) => a[2] - b[2] })
    pq.enqueue([0,0,0])
    
    while(!pq.isEmpty()) {
        const [i, j, w] = pq.dequeue()
        if (i === row -1 && j === col - 1) return w
        for (let [x, y] of dir) {
            const dx = i + x
            const dy = j + y
            if (dx >= 0 && dx < row && dy >= 0 && dy < col) {
                const effort = Math.abs(heights[dx][dy] - heights[i][j])
                const maxDiff = Math.max(effort, distance[i][j]);
                if (maxDiff < distance[dx][dy]) {
                    distance[dx][dy] = maxDiff
                    pq.enqueue([dx, dy, maxDiff])
                }
            }
        }
    }    
};