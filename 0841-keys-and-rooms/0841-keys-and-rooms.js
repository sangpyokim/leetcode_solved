/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let res = true
    const len = rooms.length
    const visited = Array.from({length: len}, () => false)
    
    function helper(node) {
        if (visited[node]) return
        visited[node] = true
        
        
        for (let next of rooms[node]) {
            helper(next)    
        }
        
    }
    helper(0)
    
    for (let x of visited) {
        if (!x) return res = false
    }
    
    
    return res
};