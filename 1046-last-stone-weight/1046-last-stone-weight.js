/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const pq = new MaxPriorityQueue();
    
    for (let stone of stones) {
        pq.enqueue(stone)
    }
    while(pq.size() > 1) {
        const a = pq.dequeue().element
        const b = pq.dequeue().element
        if (Math.abs(a-b) !== 0) {
            pq.enqueue(a-b)
        }
    }
    return pq.isEmpty() ? 0 : pq.front().element
};