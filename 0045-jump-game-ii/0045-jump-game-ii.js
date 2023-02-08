/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(A) {
    let max = 0, jumps = 0, curEnd = 0

    // 마지막 인덱스까지 도달하기위해 len-1까지 반복
    for (let i = 0; i < A.length - 1; i++) {
        // 현재 위치에서 갈 수 있는 최대값
		max = Math.max(max, i + A[i]);

        // 최대치로 점프함.
		if (i == curEnd) {
			jumps++;
			curEnd = max;
		}
	}

    return jumps
};