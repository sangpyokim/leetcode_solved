/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b)
    // console.log(people)
    let left = 0, right = people.length-1
    let count = 0
    while(left <= right) {
        const sum = people[left] + people[right]
        // console.log(sum,left,right)
        if (sum > limit) right--
        else {
            left++
            right--
        }
        count++
        
    }
    
    return count
};