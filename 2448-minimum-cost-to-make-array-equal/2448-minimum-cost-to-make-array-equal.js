var minCost = function(nums, cost) {
    // 평균
    let answer = Infinity
    let left = Math.min(...nums)
    let right = Math.max(...nums)
    const len = nums.length
    while(left < right) {
        
        const mid = (right+left) >> 1
        
        let sumCost1 = sum(mid)
        let sumCost2 = sum(mid+1)
        
        if (sumCost1 > sumCost2) {
            left = mid + 1
        } else {
            right = mid
        }
        // console.log(mid, sumCost1, sumCost2)
        answer = Math.min(sumCost1, sumCost2, answer)
        
    }
    function sum(mid) {
        let res = 0
        for (let i = 0; i < len; i++) {
            res += Math.abs(nums[i] - mid) * cost[i] 
        }
        return res
    }
    
    return answer === Infinity ? 0 : answer
};