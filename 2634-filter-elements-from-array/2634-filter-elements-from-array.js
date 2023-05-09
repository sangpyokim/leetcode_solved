/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = []
    
    for (let i in arr) {
        const x = arr[i]
        const t = fn(x, i*1)
        
        if (t) res.push(x)
    }
    
    
    return res
};