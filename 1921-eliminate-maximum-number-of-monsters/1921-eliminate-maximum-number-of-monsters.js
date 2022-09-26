/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
// 먼저 도착하는 괴물 순으로 처리함.
var eliminateMaximum = function(dist, speed) {
    for (let i = 0; i < dist.length; i++) {
        dist[i] = (dist[i] - 1) / speed[i]
    }    
    dist.sort((a,b) => a-b)
    
    for (let i = 0; i < dist.length; i++) {
        if (i > dist[i]) return i
    }
    
    return dist.length
};
