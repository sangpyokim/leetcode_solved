/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph = Array.from({length: n+1}, () => []) // 인접리스트
    const color = Array.from({length: n+1}, () => -1) // 컬러 배열
    
    for (let [x, y] of dislikes) {
        graph[x].push(y)
        graph[y].push(x)
    }
    
    for (let i = 0; i < n; i++ ) {
        // 색칠되어있지않는 노드만 bfs해서 색칠해줌
        if (color[i] === -1 && !bfs(i, color, graph)) return false
        
    }

    return true
};

function bfs(node, color, graph) {
    color[node] = 1
    let q = [node]
    
    while(q.length) {
        const temp = []
        // 큐 요소 순회
        for (let cur of q) {
            // 현재 요소에서 갈 수 있는 노드들 순회
            for (let i of graph[cur]) {
                // i = 다음노드
                // 다음노드가 칠해져있지 않을 때
                if (color[i] === -1) {
                    // q에 다음 요소 넣기
                    temp.push(i)
                    // 색칠해줌
                    color[i] = 1 - color[cur]
                }
                // 다음 노드의 색깔이 현재노드의 색깔과 같을 때 불가능
                else if (color[i] === color[cur]) return false
            }
        }
        q = temp
    }
    
    return true
}
