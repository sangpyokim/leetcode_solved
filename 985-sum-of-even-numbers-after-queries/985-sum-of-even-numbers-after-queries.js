/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    const answer = []
    

    let odd = 0
    for (let num of nums) {
        if (num % 2 === 0) odd += num
    }
    
    
    for (let i in queries) {
        const [val, index] = queries[i]
        
        let temp = nums[index]
        
        nums[index] = nums[index] + val
        
        // 짝수에서 짝수 => 원래값 빼고 더해줌
        // 짝수에서 홀수임 -> 원래 값 빼줌
        // 홀수에서 짝수 -> 바뀐 값 더해줌
        
        if (temp % 2 === 0 && nums[index] % 2 === 0) {
            odd -= temp
            odd += nums[index]
        } else if (temp % 2 === 0 && nums[index] % 2 !== 0) {
            odd -= temp
        } else if (temp % 2 !== 0 && nums[index] % 2 === 0) {
            odd += nums[index]
        }
        answer.push(odd)
    }
    
    return answer
};