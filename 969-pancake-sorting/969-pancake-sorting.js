/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const answer = []
    let left = 0, right = arr.length-1
    
    
    
    while(0 < right) {
        if (arr[right] === right+1) {
            right--
        } else {
            const i = arr.findIndex((ele) => ele === right+1)
            answer.push(i+1)
            answer.push(right+1)
            sort(i)
            sort(right)
            
            right--
        }
    }
    
    function sort(index) {
        let l = 0, r = index
        while(l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }
    
    return answer
};