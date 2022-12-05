/**
 * @param {number} n
 * @return {number}
 */

// 하향식
function fib(n) {
    const memo = new Map()
    
    function helper(num) {
        if (num < 2) return num
        
        if (memo.has(num)) return memo.get(num)
        
        memo.set(num, helper(num-1) + helper(num-2))
        
        return memo.get(num)
    }
    
    return helper(n)
};


// 상향식
// function fib(n) {

// };