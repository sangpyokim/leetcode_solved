/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let right = 0, answer = 0;
    let temp = 0
    for (let i = 0; i < k; i++) {
        temp += cardPoints[i]
    }
    answer = temp
    let len = cardPoints.length-1
    let j = k-1
    for (let i = len; i > len - k; i--) {
        temp += cardPoints[i]
        temp -= cardPoints[j]
        j--
        answer = Math.max(answer, temp)
    }
    return answer
};