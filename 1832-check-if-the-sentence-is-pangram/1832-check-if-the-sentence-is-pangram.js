/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const arr = Array.from({length: 26}, () => false)
    
    for (let char of sentence) {
        const n = char.charCodeAt(0)-97
        arr[n] = true
    }
    
    function check() {
        let res = true
        for (let x of arr) {
            if (!x) return false
        }
        return res
    }
    
    return check()
};