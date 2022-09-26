var maximalNetworkRank = function(n, roads) {
    let res = 0
    let map = Array(n).fill(0)
    let adj = {}
    roads.forEach(([u,v]) => {
        map[u]++
        map[v]++
        adj[[Math.min(u,v), Math.max(u,v)]] = true
    })
    
    for(let i=0;i<n;i++){
        if(!map[i]) continue
        for(let j=i+1;j<n;j++){
            if(!map[j]) continue
            let minus = adj[[i,j]] ?1:0
            res = Math.max(map[i]+map[j]-minus, res)
        }
    }

    return res
};