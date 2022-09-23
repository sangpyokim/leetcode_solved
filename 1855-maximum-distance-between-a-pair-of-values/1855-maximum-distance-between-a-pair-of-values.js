/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 정렬되어있으면 투포인터 굳~
// nums1[i] 보다 nums2가 작다면 계속 작은거임
var maxDistance = function(nums1, nums2) {
    let answer = 0, i = 0, j = 0
    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) i++
        else {
            answer = Math.max(answer, j - i)
            j++
        }
    }
    return answer
};
