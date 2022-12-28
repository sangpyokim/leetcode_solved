const minStoneSum = (a, k) => {
    let pq = new MaxPriorityQueue({priority: x => x});
    for (const e of a) pq.enqueue(e);
    while(k--) {
        let cur = pq.dequeue().element;
        let remove = parseInt(cur / 2);
        pq.enqueue(cur - remove);
    }
    let res = 0;
    while(pq.size()) res += pq.dequeue().element; // difference, parse pq directly
    return res;
};