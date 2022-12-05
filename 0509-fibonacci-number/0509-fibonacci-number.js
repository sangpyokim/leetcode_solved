/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    const memo = new Map();
    
    function dfs(num) {
        if (num < 2) return num;
        if (memo.has(num)) return memo.get(num)
        
        memo.set(num, dfs(num-1) + dfs(num-2))
        
        return memo.get(num) 
    }
    
    return dfs(n)
};

// var fib = function(n, mem = {}) {
//     if(n in mem) return mem[n]
//     if(n <= 2) return ( n ? 1 : 0)
//     mem[n] = fib(n-1, mem) + fib(n-2, mem)
//     return mem[n]
// };

