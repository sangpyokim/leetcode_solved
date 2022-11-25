/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let par = new Array(edges.length+1).fill(0).map((v, i) => v = i)
    let rank = new Array(edges.length+1).fill(0).map((v, i) => v = 0)
    
    const find = x => x === par[x] ? x : par[x] = find(par[x])
    function union(x, y) {
        if (x > y) return union(y, x)
        x = find(x)
        y = find(y)

        // 두 노드의 root 같으면 합치지 않음.
        if (x === y) return

        // 높이가 더 낮은 트리를 높이가 높은 트리 밑에 넣음.
        if (rank[x] < rank[y]) {
            par[x] = y
        } else {
            par[y] = x
        }

        if (rank[x] === rank[y]) {
            rank[x] += 1
        }
}
    
    for (let [x, y] of edges) {
        // console.log(par, rank)
        if(find(x) === find(y)) return [x, y];
        else union(x, y)
    }
    
    
};