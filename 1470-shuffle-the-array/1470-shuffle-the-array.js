/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr1 = nums.slice(0, nums.length/2)
    const arr2 = nums.slice(nums.length/2, nums.length)
    const answer = []
    for (const x in arr1) {
        answer.push(arr1[x])
        answer.push(arr2[x])
    }
    return answer
};