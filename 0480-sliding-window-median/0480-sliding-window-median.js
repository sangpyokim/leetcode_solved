/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const medianSlidingWindow = (nums, k) => {
	const arr = []
	const res = []
	const isEven = k % 2 === 0
	const m = k >> 1

	for (let i = 0; i < nums.length; i++) {
		binaryInsert(arr, nums[i])

		if (arr.length > k) {
			binaryDelete(arr, nums[i - k])
		}

		if (arr.length === k) {
			res.push(isEven ? (arr[m - 1] + arr[m]) / 2 : arr[m])
		}
	}
	return res
}
function binaryInsert(arr, target) {
    let left = 0, right = arr.length
    
    while(left < right) {
        let mid = (right + left) >> 1
        
        if (arr[mid] < target) {
            left = mid +1
            
        } else {
            right = mid
        }
    }
    
    arr.splice(left, 0 , target)
}
function binaryDelete(arr, target) {
    let left = 0, right = arr.length
    while(left < right) {
        const mid = (right + left) >> 1
        
        if (arr[mid] === target) {
            arr.splice(mid, 1)  
            break
        } else if (arr[mid] < target) {
            left = mid+1
        } else {
            right = mid
        }
    }
}