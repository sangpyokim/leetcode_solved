var search = function(nums, target) {
    const set = new Set(nums)
    if (!set.has(target)) return -1
    
    const temp = []
    for (let i in nums) {
         const num = nums[i]
         temp.push([i*1, num])
    }
    
    temp.sort((a,b) => a[1] - b[1])
    
    let left = 0, right = nums.length
    while(left < right) {
        const mid = (right + left) >>> 1
        const [index, value] = temp[mid]

        if (value === target) return index
        else if (value > target) right = mid
        else left = mid + 1
    }
    
};