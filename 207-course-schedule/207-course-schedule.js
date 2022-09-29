/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    const graph = {}
    for (let [a,b] of prerequisites) {
        if (graph[a]) {
            graph[a].push(b)
        } else {
            const temp = []
            temp.push(b)
            graph[a] = temp
        }
    }

    
    for (let i = 0; i < numCourses; i++) {
        if (!bfs(i)) return false
    }
    
    function bfs(node) {
        const q = [node]
        const check = new Array(numCourses).fill(false)
        while(q.length) {
            const len = q.length
            for (let i = 0; i < len; i++) {
                const curNode = q.shift()

                if (graph[curNode] == undefined) continue
                
                if(check[curNode]) continue
                check[curNode] = true
                
                for (let next of graph[curNode]) {
                    if (next == node) return false
                    q.push(next)
                }
                
            }
        }
        
        return true
    }
    
    
    return true
};

// B -> A, C -> B TRUE
// B -> A, C -> A TRUE
// B -> A
// 사이클이 있다면 불가능

// 전체 방문한 arr
// 현재 과목에서 방문한 arr


// A의 선수강 과목으로 거슬러 올라가면서 방문했던곳을 다시 방문하지않으면 X
// EX) A,B A,C C,B