/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length-1] < 9) {
        digits[digits.length-1] = digits[digits.length-1] + 1
        return digits
    } 
    digits[digits.length-1] = digits[digits.length-1] + 1
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 10 ) {
            digits[i] = digits[i] - 10
            if (digits[i-1] == undefined) {
                digits.unshift(1)
            } else {
                digits[i-1] = digits[i-1] + 1
                
            }
        }
    }
    
    return digits
};