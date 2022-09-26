/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    
    
    const len = nums.length
    let num = 0
    for (let x of nums) {
        num ^= x
    }
    const res = []
    let target = (1 << maximumBit) - 1;
    for (let i in nums) {
        res[i] = target ^ num
        num ^= nums[len-1 -i]
    }
    return res
};

        