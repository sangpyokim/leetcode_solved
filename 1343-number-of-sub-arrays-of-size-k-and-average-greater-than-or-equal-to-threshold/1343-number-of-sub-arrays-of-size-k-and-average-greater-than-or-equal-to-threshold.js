/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let answer = 0
    let sub = 0
    for (let i = 0; i < k; i++) {
        sub+=arr[i]
    }
    if (sub/k >= threshold) answer++
    let j = 0
    for (let i = k; i < arr.length; i++) {
        sub+=arr[i]
        sub-=arr[j]
        j++
        if (sub/k >= threshold) answer++
    }
    
    return answer
};