var longestPath = function(parent, s) {
    let n = parent.length

    let children = new Array(n)
    for (let i = 0; i < n; i++) {
        children[i] = new Array()
    }
    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i)
    }

    s = s.split("")
    let longestPath = 0
    let dfs = function(node) {
        let longestLength = 0, longestLength2 = 0
        for (let child of children[node]) {
            let lengthChild = dfs(child)
            if (s[node] == s[child]) continue
            if (longestLength < lengthChild) {
                longestLength2 = longestLength
                longestLength = lengthChild
            }
            else if (longestLength2 < lengthChild) {
                longestLength2 = lengthChild
            }
        }
        longestPath = Math.max(longestPath, longestLength + longestLength2 + 1)
        return longestLength + 1
    }
    dfs(0)
    return longestPath
};