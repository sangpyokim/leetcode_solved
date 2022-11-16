/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    if (forest[0][0] === 0) return -1
    let answer = 0
    const row = forest.length
    const col = forest[0].length
    const stack = forest.flat().filter(x => x && x !== 1).sort((a, b) => b - a);
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    let startPoint = [0,0]
    
    const vaild = (dx, dy) => dx >= 0 && dx < row && dy >= 0 && dy < col && forest[dx][dy] !== 0

    const bfs = (target) => {
        let walkPoint = 0
        
        const visited = forest.map(res => new Array(col).fill(false))
        let q = [startPoint]
        
        while(q.length) {
            const len = q.length
            const next = []
            for (let [i, j] of q) {
                if (forest[i][j] === target) {
                    startPoint = [i, j]
                    return walkPoint
                }
                if (visited[i][j]) continue
                visited[i][j] = true
                
                for (let [x, y] of dir) {
                    const dx = i+x
                    const dy = j+y
                    if (vaild(dx, dy)) next.push([dx,dy])
                }     
                
            }
            q = next
            walkPoint += 1
        }
        return -1
    }

    while(stack.length) {
        const number = stack.pop()
        const result = bfs(number)
        if (result === -1) return -1
        answer += result
    }
    
    
    
    return answer
};