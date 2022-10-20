var subarraysWithKDistinct = function(A, K) {
    return (atMostK(A, K) - atMostK(A, K - 1));
};

function atMostK(A, K) {
    const map = new Map()
    let left = 0, right = 0, count = 0
    const len = A.length
    
    while (right < len) {
        const cur = A[right]
        
        map.set(cur, map.get(cur) + 1 || 1)
        
        while(K - map.size < 0) {
            const prev = A[left]
            map.set(prev, map.get(prev) - 1)
            if (map.get(prev) === 0) map.delete(prev)
            
            left++
        }
        
        count += right - left +1
        right++
    }
    
    return count
}
