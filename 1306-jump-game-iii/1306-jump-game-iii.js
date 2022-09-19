/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let answer = false

    const len = arr.length
    const visited = new Array(len).fill(false)
    function dfs(index) {
        if (index < 0 || index >= len || visited[index]) return
        visited[index] = true
        
        const cur = arr[index]
        
        if (cur === 0) return answer = true

        dfs(index+cur)
        dfs(index-cur)
    }
    dfs(start)
    
    return answer
};