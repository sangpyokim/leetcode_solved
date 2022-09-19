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
    
    for (let i in items) {
        const [curItemValue, curItemLabel] = items[i]
        if (map.has(curItemLabel)) {
            if (map.get(curItemLabel) + 1 > useLimit) continue
                answer += curItemValue
                map.set(curItemLabel, map.get(curItemLabel) + 1) 
                count++
        } else {
            answer += curItemValue
            count++
            map.set(curItemLabel, 1)
        }
        
        if (count === numWanted) return answer
    }
    
    return answer
};