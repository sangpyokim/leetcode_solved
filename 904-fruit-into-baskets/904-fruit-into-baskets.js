/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const map = new Map()
    
    let left = 0, right = 0
    
    for (right in fruits) {
        const fruit = fruits[right]
        
        map.set(fruit, map.get(fruit) + 1 || 1)
        
        if (map.size > 2) {
            map.get(fruits[left]) > 1 ? map.set(fruits[left], map.get(fruits[left]) - 1) : map.delete(fruits[left])
            left++
        }
    }
    
    return right - left +1
};