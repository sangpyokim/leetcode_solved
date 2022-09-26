/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false
    
    const arr1 = {}
    const arr2 = {}
    for (let i in word1) {
        const n = word1[i]
        const m = word2[i]
        if (arr1[n]) arr1[n]++
        else arr1[n] = 1
        
        if (arr2[m]) arr2[m]++
        else arr2[m] = 1
    }

    const t1 = []
    const t2 = []
    for (let key in arr1) {
        t1.push(arr1[key])
    }
    for (let key in arr2) {
        t2.push(arr2[key])
    }
    for (let key in arr1) {
        if (!arr2[key]) return false
    }
    t1.sort((a,b) => a-b)
    t2.sort((a,b) => a-b)
    if (t1.length !== t2.length) return false
    for (let i in t1) {
        console.log(i)
        if (t1[i] !== t2[i]) return false
    }
    return true
};