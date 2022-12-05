/**
 * @param {number} n
 * @return {number}
 */

// 하향식
function fib(n) {
    
    
    function helper(num) {
        if (num < 2) return num
        
        
        return helper(num-1) + helper(num-2)
    }
    
    return helper(n)
};


// 상향식
// function fib(n) {

// };