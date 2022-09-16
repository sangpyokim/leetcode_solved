/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0;
    
    while(n != 0) {
        // 비트에서 1에 해당하는 수 (0 또는 1)을 sum에 누적시킴
        sum += n & 1;
        // 첫번째자리는 계산되었으니 1만큼 오른쪽으로 shift
        n = n >>> 1;
    }
    
    return sum;
};