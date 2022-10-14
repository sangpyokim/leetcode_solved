/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const map = new Map()
    let left = 0
    let answer = 0
    for (let right in fruits) {
        const fruit = fruits[right]
        
        map.set(fruit, map.get(fruit) + 1 || 1)

        if (map.size > 2) {
            while(map.size > 2) {
                const prev = fruits[left]
                map.set(prev, map.get(prev) - 1)
                if (map.get(prev) <= 0) map.delete(prev)
                left++
            }
        }
        answer = Math.max(answer, right - left + 1)
    }
    return answer
};