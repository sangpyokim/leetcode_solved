var findRedundantConnection = function(edges) {
    let par = new Array(edges.length+1).fill(0).map((v, i) => v = i)
    const find = x => x === par[x] ? par[x] : par[x] = find(par[x])
    const union = (x,y) => par[find(y)] = find(x)
    
    for (let [x, y] of edges) {
        if(find(x) === find(y)) return [x, y];
        else union(x, y)
    }
    
};