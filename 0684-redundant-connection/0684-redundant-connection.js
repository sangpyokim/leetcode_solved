/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // edge 마다 그래프에 추가 시키면서하기
    // [[1,2],[1,3],[2,3]]
    // x -> y 로 가는 경로가 있다면 return
    // 1 -> 2 갈 수 없다면 추가
    // 1 -> 3 마찬가지로 추가
    // 2 -> 3 갈 수 있기때문에 return
    const len = edges.length
    const list = Array.from({ length: len+1 }, () => []) // 그래프

    
    function helper(from, to, set) {
        if (set.has(from)) return
        set.add(from)

        if (from === to) return true
        
        let res = false
        for (let next of list[from]) {
            if (helper(next, to, set))  res = true
        }
        
        return res
    }  
    
    for (let [x, y] of edges) {

        if (helper(x, y, new Set())) return [x, y]
        list[x].push(y)
        list[y].push(x)
    }
    
    
};