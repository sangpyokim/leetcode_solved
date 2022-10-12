/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    
    let left = 0, right = 0
    for (let w of weights) {
        left = Math.max(left, w)
        right += w
    }
    while(left < right) {
        let mid = Math.floor((left + right) / 2), need = 1, cur = 0

        for (let w of weights) {
            if (cur + w > mid) {
                need += 1
                cur = 0
            }
            cur += w
        }

        if (need > D) left = mid + 1
        else right = mid
    }
    return left
};
// 최소 담을 수 있는 무게: 무게들 중 가장 큰 값 -> 무게들의 길이만큼 시간이 걸림
// 최대 담을 수 있는 무게: 무게들의 합 -> 하루 걸림.
// 최소 ~ 최대의 사이 중에서 days만큼의 시간이 걸릴 때 최대 무게