/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const answer = []
    
    function BT(index, str, num) {
        if (index === n*2) {
            if (num === 0) return answer.push(str)
            else return
        }
    
        if (n < num || 0 > num) return
        
        BT(index+1, str+'(', num+1)
        BT(index+1, str+')', num-1)
    }
    
    BT(1, '(', 1)
    return answer
};
/// 