/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const root = {}
    const row = board.length
    const col = board[0].length
    for (let word of words) {
        let node = root
        for (let char of word) {
            if (node[char] == null) node[char] = {}
            node = node[char]
        }
        node.isWord = true
    }

    const dir = [[0,1], [1,0], [-1,0], [0,-1]]
    const answer = new Set()
    const visited = new Array(row).fill(0).map(() => new Array(col).fill(0))
    function dfs(i, j, node, str) {
        const char = board[i][j]
        if (node[char] == null) return visited[i][j] = 0
        if (node[char].isWord) answer.add(str+char)
        
        for (let [x,y] of dir) {
            const dx = i + x
            const dy = j + y
            if (dx >= 0 && dx < row && dy >= 0 && dy < col && visited[dx][dy] === 0) {
                let n = node[char]
                visited[dx][dy] = 1
                dfs(dx, dy, n, str+char)
                
            }
        }
        visited[i][j] = 0
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const char = board[i][j]
            const node = root
            if (root[char]) {
                visited[i][j] = 1
                dfs(i, j, node, '')
                visited[i][j] = 0
                
            }
        }
    }
    
    return [...answer]
};