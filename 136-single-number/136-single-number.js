/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = 0
    for (let num of nums) {
        n ^= num
    }
    return n
};