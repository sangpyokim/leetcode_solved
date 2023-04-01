var search = function(nums, target) {
    let point = Math.floor(nums.length / 2)
    let end = nums.length
    let start = 0
    const visited = []
    while(nums[point] !== target) {
        if (visited[point]) return -1
        else visited[point] = true
        const cur = nums[point]
        if (cur < target) {
            start = point
            point = Math.floor((point + end) / 2)
        } else {
            end = point
            point = Math.floor((point + start) / 2)
        }
    }
    return point
};