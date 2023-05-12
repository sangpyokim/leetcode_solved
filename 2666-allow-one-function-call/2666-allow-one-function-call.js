/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    const res = {
        calls: 1,
        value: 0
    }
    
    return function(...args){
        const res = fn(...args)
        if (res.calls > 1) return 
        
        return res
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
