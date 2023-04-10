var isValid = function(s) {
    const stack = []
    for (let x of s) {
        if (x === "(") stack.push(")")
        else if (x === "[") stack.push("]")
        else if (x === "{") stack.push("}")
        else {
            const a = stack.pop()
            if (a !== x) return false
        }
    }
    if (stack.length>0)return false
    return true    
};