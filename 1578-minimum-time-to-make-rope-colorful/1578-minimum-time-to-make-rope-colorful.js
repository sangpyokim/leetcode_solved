/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    if (colors.length === 1) return 0
    
    let char
    let max = 0
    let answer = 0
    for (let i = 0; i < colors.length; i++) {
        if (char !== colors[i]) {
            char = colors[i]
            max = neededTime[i]
        } else { // 이전 char과 같지 않음.
            if (max < neededTime[i]) {
                answer += max
                max = Math.max(max, neededTime[i])
            }
            else answer += neededTime[i]
        }
    }
    
    return answer
};