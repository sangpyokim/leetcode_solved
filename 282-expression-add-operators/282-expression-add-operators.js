var addOperators = function(num, target) {
    const output = [];
    
    const backtrack = (str, exp, total, prev) => {
        if (str.length === 0) {
            if (total === target) {
                output.push(exp);
            }
            return;
        }
        
        const len = str[0] === '0' ? 1 : str.length;
        
        for (let i = 1; i <= len; ++i) {
            let cur = +str.slice(0, i);
            let remain = str.slice(i);
            
            backtrack(remain, `${exp}+${cur}`, total + cur, cur);
            backtrack(remain, `${exp}-${cur}`, total - cur, -cur);
            const prod = prev * cur;
            backtrack(remain, `${exp}*${cur}`, total - prev + prod, prod);
        }
    }
    
    const curLength = num[0] === '0' ? 1 : num.length;
    
    for (let i = 1; i <= curLength; ++i) {
        let cur = num.slice(0, i);
        let remain = num.slice(i);
        
        backtrack(remain, cur, +cur, +cur);
    }
    return output;
};