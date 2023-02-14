/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const max = Math.max(a.length, b.length);
    const rA = a.split('').reverse()
    const rB = b.split('').reverse()
    
    let add = 0;
  
    let answer = [];

    for (let i = 0; i < max; i++) {
        let aa = rA[i] == undefined ? 0 : rA[i]*1;
        let bb = rB[i] == undefined ? 0 : rB[i]*1;
        const q = aa + bb*1 + add >= 2
        if (q) {
            answer.push((aa + bb*1 + add) % 2)
            add = 1;
        } else {
            answer.push(aa + bb*1 + add )
            add = 0;
        }
    }
    if (add) answer.push(1)
    return answer.reverse().join('')
};