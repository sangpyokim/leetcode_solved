/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let counter = 0;
    
    mat.forEach((v, i) => {
        if (mat.length % 2 === 1 && i == Math.floor(mat.length / 2)) counter += v[i]
        else {
            counter += (v[i] + v[mat.length - 1 - i])
        }
    })
    
    return counter
};