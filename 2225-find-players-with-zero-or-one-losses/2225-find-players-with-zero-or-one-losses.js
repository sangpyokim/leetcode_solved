/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const answer = [[],[]]
    const loserMap = new Map()
    const people = new Set()
    for (let [x, y] of matches) {
        people.add(x)
        people.add(y)
        loserMap.set(y, loserMap.get(y) + 1 || 1)
    }
    const arr = [...people].sort((a,b) => a-b)
    
    for (let k of arr) {
        if (!loserMap.has(k)) answer[0].push(k)
        if (loserMap.get(k) === 1) answer[1].push(k)
    }
    
    return answer
};