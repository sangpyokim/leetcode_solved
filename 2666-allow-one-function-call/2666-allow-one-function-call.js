/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let beforeCalled = false
    
    return function(...args){
        if (beforeCalled) return
        beforeCalled = true
        
        const res = fn(...args)
         
        
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
