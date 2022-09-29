/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.find(ele => ele === endWord)) return 0
    
    let answer = 0
    const wordLength = beginWord.length
    
    const set = new Set(wordList)

    
    const q = [beginWord]
    while(q.length) {
        const len = q.length
        answer++
        for (let i = 0; i < len; i++) {
            const cur = q.shift()

            if (cur === endWord) return answer
            
            for (let j = 0; j < wordLength; j++) {
                let a = cur.slice(0, j)
                let c = cur.slice(j+1)
                
                for (let k = 0; k < 26; k++) {
                    let b = String.fromCharCode(k+97)
                    let str = a + b + c

                    if (set.has(str)) {
                        set.delete(str)
                        q.push(str)
                    }
                }
            }
        }
    }
    return 0
};
