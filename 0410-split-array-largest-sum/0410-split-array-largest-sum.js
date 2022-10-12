/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = 0, right = 0
    for (let num of nums) {
        left = Math.max(num, left)
        right += num
    }
    // left = nums의 가장 큰 값
    // right = nums의 총 합
    
    while(left < right) {
        // 
        let mid = Math.floor((left + right) / 2)
        let total = 0, count = 1
        for (let num of nums) {
            if (total + num > mid) {
                count++
                total = 0
            } 
            total+=num
        }
        if (count > k) left = mid+1
        else right = mid
    }
    return left
};