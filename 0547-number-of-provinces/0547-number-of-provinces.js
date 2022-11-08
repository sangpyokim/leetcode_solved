/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let res = 0
    const len = isConnected.length
    const visited = Array.from({ length: len }, () => false)
    

    function helper(node) {
        if (visited[node]) return
        visited[node] = true
        
        const nextNodes = isConnected[node]
        
        for (let i in nextNodes) {
            const nextNode = nextNodes[i]
            if (nextNode === 1) helper(i)
            
        }
    }
    
    for (let i in isConnected) {
        if (!visited[i]) {
            res+=1
            helper(i)
        }
    }
    
    return res
};