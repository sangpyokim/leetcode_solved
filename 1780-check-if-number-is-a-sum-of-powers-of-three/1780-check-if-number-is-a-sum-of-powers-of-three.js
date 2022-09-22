/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    // while문으로 n이내의 가장 큰 3의 제곱수를 찾고 n에서 빼면서 반복
    let temp = n
    let i = 0
    const set = new Set()
    while(temp >= 0) {
        if (temp === 0) return true
        i = 0
        while(a(i) <= temp) {
            i++
        }
        temp -= a(i-1)
        if (set.has(i-1)) return false
        set.add(i-1)
    }
    
    return false
};
    
function a(num) {
    return Math.pow(3, num)
}
