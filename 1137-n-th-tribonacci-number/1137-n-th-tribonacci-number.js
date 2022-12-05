/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = new Map()
    
    function fib(num) {
        if (num === 1 || num === 2) return 1
        if (num === 0) return 0
        if (memo.has(num)) return memo.get(num)
        
        memo.set(num, fib(num-1) + fib(num-2) + fib(num-3))
        
        return memo.get(num)
    }
    
    return fib(n)
};