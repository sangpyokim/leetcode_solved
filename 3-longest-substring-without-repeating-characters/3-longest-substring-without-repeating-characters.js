/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	if (s.length < 2) return s.length;
	let left = 0;
	let right = 0;
	let maxLength = 0;
	let map = new Map()

	while (right < s.length) {
		var char = s.charAt(right);
		
		if (map.has(char)) {
			maxLength = Math.max(maxLength, right - left);
			left = Math.max(left, map.get(char) + 1);
		}
		
		map.set(char, right++);
	}
	return Math.max(maxLength, right - left);
};