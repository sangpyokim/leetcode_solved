/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    // key: index, value: 남은 수
    const answer = []
    const arr = []
    arr[1] = 0
    arr[2] = 1
    arr[4] = 2
    
    for (let i = lo; i <= hi; i++) {
        
        answer.push([i, helper(i)])
    }
    
    
    function helper(num) {
        const stack = []
        
        let power = 0
        
        while(num > 1) {
            if (arr[num]) return arr[num] + power
            stack.push(num)
            power++
            if (num % 2 === 0) {
                num = num / 2
            } else {
                num = 3 * num + 1
            }
            
        }
        
        const len = stack.length
        for (let i = 1; i <= len; i++) {
            const temp = stack.pop()
            arr[temp] = i
        }
        
        return power
    }
    
    
    answer.sort((a,b) => a[1] - b[1])
    return answer[k-1][0]
};