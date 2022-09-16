var rotate = function(M) {
    let n = M.length
    let depth = Math.floor(n / 2)
    
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1
        let opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            // 00 -> 03
            // 03 -> 33
            // 33 -> 30
            // 30 -> 00
            [M[i][i+j], M[opp-j][i], M[opp][opp-j], M[i+j][opp]] = [M[opp-j][i], M[opp][opp-j], M[i+j][opp], M[i][i+j]]
        }
    }
};