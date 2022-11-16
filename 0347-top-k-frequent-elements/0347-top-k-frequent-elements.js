/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    const answer = []
    for (let i in nums) {
        const num = nums[i]
        if (!map[num]) map[num] = 0
        map[num] += 1
    }

    const pq = new MaxPriorityQueue((bid) => bid.value);
    const arr = []
    for (let key in map) {
        pq.enqueue(key, map[key])
    }
    
    for (let i = 0; i < k; i++) {
        const res = pq.dequeue()
        answer.push(res.element)
    }
    
    return answer
};