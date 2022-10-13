var minDays = function(bloomDay, m, k) {
    let n = bloomDay.length;
    let left = 1;
    let right = Number.MAX_SAFE_INTEGER;
    if (m * k > n) {
        return -1;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2), flower = 0, bouquet = 0
        
        for (let i = 0; i < n; i++) {
            const cur = bloomDay[i]
            if (cur > mid) {
                flower = 0
            } else {
                flower++
                
                if (flower === k) {
                    bouquet++
                    flower = 0
                }
            }
        }
        
        if (bouquet >= m) right = mid
        else left = mid +1
    }
        

    return left;
};

// 문제의 핵심 요약
// m개의 부케를 만들어야함. 하나의 부케는 k개의 연속된 꽃들로 만들 수 있음.
// 꽃이 피기위한 최소 날 = 1, 최대 날 = 1e9
// 꽃이 피기위한 날들의 범위에서 이진탐색으로 최소한의 날을 리턴함.
// mid가 Arr를 돌면서 연속되는 꽃의 수가 k가 넘으면 부케를 만듬.
// 만약 m개의 부캐를 만들 수 있다면, mid의 값이 최적의 값보다 높을 수 있기때문에 right의 값을 줄임.
// 없다면 mid값이 부족했기때문에 left를 mid로 옮김.