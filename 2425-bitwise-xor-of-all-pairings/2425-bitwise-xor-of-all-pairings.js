// Rationale: From Boolean algebra we know that n^0 = n and n^n = 0,
// from which we can infer that the xor of an even count of an integer n is 0,
// and the xor of an odd count of an integer n is n.
// We also know that the ^ operator is commutative and associative.
//
// So, from the Example:
// nums1 = [2, 1, 3],
// nums2 = [10, 2, 5, 0]
// nums3 = [2^10, 2^2, 2^5, 2^0, 1^10, 1^2, 1^5, 3^0, 3^10, 3^2, 3^5, 3^0]
// Result = (2^10)^(2^2)^(2^5)^(2^0)^(1^10)^(1^2)^(1^5)^(3^0)^(3^10)^(3^2)^(3^5)^(3^0)
//        = (2^2^2^2)^(1^1^1^1)^(3^3^3^3) ^ (10^10^10)^(2^2^2)^(5^5^5)^(0^0^0)
//        = 0^0^0 ^ 10^4^5^0
//        = 0 ^ 11
//        = 11
//
// The inferences we draw from this example lead to the code below.

const xorAllNums = function (nums1, nums2) {
  let result = 0;
  const len1 = nums1.length
  const len2 = nums2.length
  if (len2 % 2) {
    for (let i = 0; i < len1; i++) {
      result = result ^ nums1[i];
    }
  }
  if (len1 % 2) {
    for (let i = 0; i < len2; i++) {
      result = result ^ nums2[i];
    }
  }
  return result;
};