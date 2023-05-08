/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = []
    
    for (let i in arr) {
        const x = arr[i]
        const element = fn(x, i*1)
        res.push(element)
    }
    
    return res
};