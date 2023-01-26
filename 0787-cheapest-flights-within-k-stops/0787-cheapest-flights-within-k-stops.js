/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = Array.from({ length: n}, () => Infinity)
    dist[src] = 0
    
    for (let i = 0; i < k+1; i++) {
        let temp = [...dist]
        for (let [start, end, weight] of flights) {

            // if (dist[start] === Infinity) continue
            if (temp[end] > dist[start] + weight) {
                temp[end] = dist[start] + weight
            }
        }
        // console.log(i, temp, dist)
        dist = [...temp]
        
    }
    
    return dist[dst] === Infinity ? -1 : dist[dst]
};