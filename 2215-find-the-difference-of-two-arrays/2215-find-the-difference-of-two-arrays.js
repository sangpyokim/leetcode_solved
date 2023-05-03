/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const answer = [[],[]]
    const map1 = new Set(nums1)
    const map2 = new Set(nums2)
    
    
    for (let k of map1) {
        if (!map2.has(k)) answer[0].push(k)
    }
    
    for (let k of map2) {
        if (!map1.has(k)) answer[1].push(k)
    }
    
    
    return answer
};  