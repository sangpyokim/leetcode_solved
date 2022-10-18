/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const arr = []
    const map = new Map()
    
    for (let i in nums) {
        // map.set(i*1, 0)
        for (let num of nums[i]) {
            arr.push([i*1, num])
        }
    }
    arr.sort((a,b) => a[1]-b[1])
    const len = arr.length, size = nums.length
    let left = 0, right = 0, maxSum = Infinity, res = []
    // console.log(arr)
    while(right < len) {
        const [i, val] = arr[right]
        
        map.set(i, map.get(i)+1 || 1)
        // console.log(map, left, right, maxSum)
        
        while(check()) {
            const [prevI, min] = arr[left]
            const [curI, max] = arr[right]
            
            if (maxSum > max-min) res = [min, max]
            maxSum = Math.min(maxSum, max-min)
            
            map.set(prevI, map.get(prevI) - 1)
            if(map.get(prevI) === 0) map.delete(prevI)
            left++
        }
        
        
        right++
    }

    function check() {
        return map.size === size
    }
    
    return res
};