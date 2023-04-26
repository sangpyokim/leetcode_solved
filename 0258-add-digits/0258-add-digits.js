/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let answer = num
    
    while(answer >= 10) {
        
        const res = helper(String(answer))
        answer = res
    }
    
    
    function helper(n) {
        let res = 0
        for (let char of n) {
            res += char * 1
        }
        return res
    }
    
    
    
    return answer
};