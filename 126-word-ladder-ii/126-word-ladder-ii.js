// 단순 memo, bfs는 업데이트 이후 TLE

// bfs && dfs 사용

// 1단계: BFS를 사용하여 beginWord -> endWord까지 가장 짧은 길이 계산한다. 
    // fn. findShortestLen()

// 2단계: 1단계를 계산하는 동안, 두개의 Map이 빌드됨. 
    // Map1: wordToShortest(key: word, value: 현재단어부터 endWord까지의 가장 짧은 길이)
    // Map2: wordToNeighbors(key: word, value: wordList의 모든 이웃들)
    // 참고: endWord까지의 가장 짧은 길이인 wordToShortest를 만들려면, endWord에서 BFS를 시작해야 합니다. Map1 wordToShortest는 3단계에서 유용합니다.

// 3단계: DFS는 beginWord에서 endWord까지의 모든 경로를 찾는 데 사용됩니다. 
    // 실행 시간을 줄이는 비법1: BFS와는 다른 beginWord에서 DFS를 시작
    // 실행 시간을 줄이는 비법2: 현재 경로에 방금 추가한 마지막 단어보다 endWord에 한 단계 더 가까운 단어만 추가.(2단계에서 빌드한 두 개의 맵이 여기에서 사용됨)
    // 이런 식으로 beginWord의 모든 이웃을 추가한 다음 이웃의 모든 이웃 등을 추가할 필요가 없습니다. 따라서 재귀 시간을 대규모로 줄일 수 있습니다.


var findLadders = function(beginWord, endWord, wordList) {
    const wordSet = new Set([...wordList, beginWord])
    const wordToShortest = new Map()
    const wordToNeighbors = new Map()
    const shortestLen = findShortestLen(endWord)
    
    const answer = []
    
    dfs(beginWord, shortestLen, [beginWord])
    
    function dfs(word, depth, list) {
        if (depth === 0) return answer.push(list)
        
        const next = findWord(word)
        for (let x of next) {
            if (wordToShortest.get(x) === depth -1) dfs(x, depth-1, [...list, x])
        }
    }
    
    return answer
    
    function findShortestLen(node) {
        const q = [node]
        let dep = 0
        wordToShortest.set(endWord, dep)
        while(q.length) {
            const len = q.length
            dep++
            
            for (let i = 0; i < len; i++) {
                const cur = q.shift()
                const wordList = findWord(cur)

                for (let word of wordList) {
                    if (wordToShortest.has(word)) continue
                    wordToShortest.set(word, dep)

                    if (word === beginWord) return dep
                    
                    q.push(word)
                }
            }
        }
        return -1
    }

    function findWord(word) {
        if (wordToNeighbors.has(word)) return wordToNeighbors.get(word)
        
        const list = []
        for (let x of wordSet) {

            if (isNeighbor(word, x)) list.push(x)
        }
        
        wordToNeighbors.set(word, list)
        return list
    }
    
    function isNeighbor(w1, w2) {
        if (w1.length !== w2.length) return false

        const len = w1.length
        let dif = 0
        for (let i = 0; i < len; i++) {
            if (w1.charAt(i) !== w2.charAt(i)) dif++
            if (dif > 1) return false
        }
        
        return dif === 1
    }

};