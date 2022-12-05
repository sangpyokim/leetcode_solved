/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    const memo = new Map();
    
    function dfs(num) {
        if (num < 2) return num;
        
        let res = 0
        if (memo.has(num-1)) res += memo.get(num-1)
        else memo.set(num-1, dfs(num-1))
        if (memo.has(num-2)) res += memo.get(num-2)
        else memo.set(num-2, dfs(num-2))

        
        return memo.get(num-1) + memo.get(num-2)
    }
    
    return dfs(n)
};
