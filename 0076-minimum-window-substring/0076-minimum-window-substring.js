/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map()
    for (let char of t) {
        map.set(char, map.get(char) + 1 || 1)
    }
    
    const len = s.length
    let left = 0, right = 0
    let min = Infinity
    let answer = ''
    for (right = 0; right < len; right++) {
        const char = s[right]
        
        if (map.has(char)) {
            map.set(char, map.get(char) -1)
        }

        while(checkMap()) {
            const prev = s[left]
            if (map.has(prev)) {
                map.set(prev, map.get(prev)+1)
            }

            if (min > right-left+1) {
                min = right - left+1
                answer = s.slice(left, right+1)
            }
            left++   
        }
    }
    function checkMap() {
        // map의 요소가 모두 0이하여야함.
        let res = true
        for (let [k, v] of map) {
            if (v > 0) return false
        }
        return true
    }
    
    return answer
};
// 1. 만족이된다면 왼쪽창을 줄이려고 시도
// 2. 또다른 맵을 만들어서 인덱스를 저장하고 왼쪽창을 이동시킴.