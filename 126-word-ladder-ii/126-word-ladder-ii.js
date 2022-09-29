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
    if (!wordList.includes(endWord)) return []
    if (beginWord === endWord) return [[beginWord]]
    
    wordList.push(beginWord)
    const wordToNeighbors = new Map()
    const wordToShortest = new Map()
    const shortestLen = findShortestLen(beginWord, endWord)
    const ladders = []
    const curLadder = [beginWord]
    
    recursion(beginWord, shortestLen)
    
    return ladders
//
    
    // 재귀  
    function recursion(curWord, curShortest) {
        if (curShortest === 0) {
            ladders.push([...curLadder])
            return
        }
        const neighbors = findAllNeighbors(curWord)
        for (let neighbor of neighbors) {
            if (!wordToShortest.has(neighbor) || wordToShortest.get(neighbor) != curShortest - 1) continue
            curLadder.push(neighbor)
            recursion(neighbor, curShortest - 1)
            curLadder.pop()
        }
    }
    
    // 1단계
    function findShortestLen(beginWord, endWord) {
        const queue = []
        queue.push(endWord)
        let count = 0
        wordToShortest.set(endWord, count)
        while (queue.length !== 0) {
            count++;
            const size = queue.length
            for (let i = 0; i < size; i++) {
                const curLast = queue.shift()
                const neighbors = findAllNeighbors(curLast)
                for (let neighbor of neighbors) {
                    if (wordToShortest.has(neighbor)) continue
                    wordToShortest.set(neighbor, count)
                    if (neighbor === beginWord)  {
                        return count
                    }
                    queue.push(neighbor)
                }
            }
        }
        return -1
    }
    
    function findAllNeighbors(word) {
        if (wordToNeighbors.has(word)) return wordToNeighbors.get(word)
        neighbors = []
        for (let w of wordList) {
            if (isNeighbor(word, w)) {
                neighbors.push(w)
            }
        }
        wordToNeighbors.set(word, neighbors)
        return neighbors
    }
    
    function isNeighbor(w1, w2) {
        if (w1.length !== w2.length) return false
        let diff = 0
        for (let i = 0; i < w1.length; i++) {
            if (w1.charAt(i) !== w2.charAt(i)) {
                diff++
                if (diff > 1) return false
            }
        }
        return diff === 1
    }
};