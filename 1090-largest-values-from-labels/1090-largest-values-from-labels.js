/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    const max = new Set(labels)
    if (max.size < numWanted && useLimit === 1) numWanted = max.size

    const items = []
    
    for (let i in values) {
        items.push([values[i], labels[i]])
    }
    items.sort((a,b) => b[0]-a[0])

    
    let answer = 0
    
    let index = 0
    let count = 0
    const map = new Map()
    while (count !== numWanted && index < values.length) {

        const [curItemValue, curItemLabel] = items[index]
        
        if (map.has(curItemLabel)) {
            if (map.get(curItemLabel) + 1 > useLimit) {
                index++
            } else {
                answer += curItemValue
                index++
                count++
                map.set(curItemLabel, map.get(curItemLabel) + 1)    
            }
            
        } else {
            answer += curItemValue
            index++
            count++
            map.set(curItemLabel, 1)
        }
    }
    return answer
};