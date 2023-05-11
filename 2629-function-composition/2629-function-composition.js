/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) { 
        let res = x
        functions.reverse()
        for (let fun of functions) {
            res = fun(res)
        }
        return res
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */