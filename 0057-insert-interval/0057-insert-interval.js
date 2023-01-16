var insert = function(intervals, newInterval) {
    const result = [];
    
    for (let i = 0; i < intervals.length; i++) {
        let [start1, end1] = intervals[i];
        let [start2, end2] = newInterval
        
        if (Math.max(start1, start2) <= Math.min(end1, end2)) {
            newInterval = [Math.min(start1, start2), Math.max(end1, end2)]
        }
        
        else if (start1 > end2) {
            result.push(newInterval)
            return result.concat(intervals.slice(i))
        } else {
            result.push(intervals[i])
        }
    }
    result.push(newInterval)
    return result
};