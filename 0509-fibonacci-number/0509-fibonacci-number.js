/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    const memo = new Map();
    
    function dfs(num) {
        if (num < 2) return num;

        memo.set(num-1, dfs(num-1))
        memo.set(num-2, dfs(num-2))
        
        return memo.get(num-1) + memo.get(num-2)
    }
    
    return dfs(n)
};
