/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    for (let i in flowerbed) {
        const flower = flowerbed[i]
        if (flower === 1) continue
        
        const left = flowerbed[i*1 - 1] || 0    
        const right = flowerbed[i*1 + 1] || 0
        if (left === 0 && right === 0) {
            flowerbed[i] = 1
            n -= 1
        }
    }
    return n <= 0
};