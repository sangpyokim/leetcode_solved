/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = 0
    const len = nums.length
    for (let num = 0; num <= len; num++) {
        n ^= num
    }
    for (let num of nums) {
        n ^= num
    }
    return n
};