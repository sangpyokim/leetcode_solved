/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const set = new Set()
    const answer = []
    nums.sort((a,b) => a-b)
    
    const len = nums.length
    let left = 0, right = len-1, mid = left+1
    
    while(left < len-2) {
        if (nums[left] > 0) break
        if (left > 0 && nums[left] === nums[left - 1]) {
            left++
            continue
        }
        right = len-1
        mid = left+1
        
        while(mid < right) {
            let sum = nums[left] + nums[mid] + nums[right]
            
            if (sum === 0) {

                answer.push([nums[left], nums[mid], nums[right]])
                while(nums[mid] === nums[mid+1]) mid++
                while(nums[right] === nums[right-1]) right--
                
                mid++
                right--
                // break;
            } else if (sum > 0) {
                right--
            } else {
                mid++
            }
        }

        left++
    }
    
    return answer
};

// {
//     const results = []

// 	if (nums.length < 3) return results

// 	nums = nums.sort((a, b) => a - b)

// 	let target = 0

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		if (nums[i] > target) break

// 		if (i > 0 && nums[i] === nums[i - 1]) continue

// 		let j = i + 1

// 		let k = nums.length - 1
		

// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k]

// 			if (sum === target) {
// 				// store the valid threesum
// 				results.push([nums[i], nums[j], nums[k]])

// 				while (nums[j] === nums[j + 1]) j++
// 				while (nums[k] === nums[k - 1]) k--

// 				j++
// 				k--

// 			} else if (sum < target) {
// 				j++

// 			} else { // (sum > target)
// 				k--
// 			}
// 		}
// 	}

// 	return results
// }