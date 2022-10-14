const characterReplacement = (s, k) => {
    const map = new Map(), len = s.length
    let left = 0, right = 0
    let maxLen = 0
    
    while(right < len) {
        const cur = s[right]
        map.set(cur, map.get(cur) + 1 || 1)
        
        maxLen = Math.max(maxLen, map.get(cur))
        const curLen = right - left +1
        
        if (curLen - maxLen > k) {
            const prev = s[left]
            map.set(prev, map.get(prev) -1)
            left++
        }
        right++
    }
    return right - left
};
// 처음부터 모든 문자의 개수를 셈
// 현재 문자의 개수를 저장
// 현재 탐색 중인 문자열의 길이 - 현재 문자의 개수가 k개를 넘으면 === 현재문자를 제외한 다른 문자의 개수가 k개가 넘으면
// 왼쪽포인터의 문자의 개수를 줄이고 윈도우의 크기를 줄임.