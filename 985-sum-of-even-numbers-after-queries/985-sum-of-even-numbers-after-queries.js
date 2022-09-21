/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const answer = []

    let even = 0
    for (let num of nums) {
        if (num % 2 === 0) even += num
    }
    
    
    for (let i in queries) {
        const [val, index] = queries[i]
        
        let temp = nums[index]
    
        nums[index] = nums[index] + val

        // even to even
        if (temp % 2 === 0 && nums[index] % 2 === 0) {
            even -= temp
            even += nums[index]
        }
        // even to odd 
        else if (temp % 2 === 0 && nums[index] % 2 !== 0) {
            even -= temp
        } 
        // odd to even 
        else if (temp % 2 !== 0 && nums[index] % 2 === 0) {
            even += nums[index]
        }
        answer.push(even)
    }
    
    return answer
};