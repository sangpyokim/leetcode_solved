/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const arr = Array.from({length: rowIndex+1}, () => [])
    arr[0] = [1]
    
    function recursion(L, i) {
        if (i > arr[L-1].length || L > rowIndex) return
 
        let left = arr[L-1][i-1] || 0
        let right = arr[L-1][i] || 0
        
        arr[L][i] = left + right
        
        recursion(L, i+1)
    }
    for (let i = 1; i <= rowIndex; i++) {
        recursion(i, 0)
    }
    
    return arr[rowIndex]
};