/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let res = 0
    const set = new Set()
    const map = new Map()
    const len = tiles.length
    
    for (let char of tiles) {
        map.set(char, map.get(char) +1  || 1)
    }
    
    
    function dfs(L, str) {
        if (L === len) return set.add(str)
        if (set.has(str)) return
        if (str.length > 0) set.add(str)
        for (let i in tiles) {
            i *= 1
            const char = tiles[i]
            if (map.get(char) > 0) {
                map.set(char, map.get(char)-1)
                dfs(L+1, str+tiles[i])
                map.set(char, map.get(char)+1)
            }
        }
    }
    dfs(0, '')
    
    return set.size
};

// combination