var subarraysWithKDistinct = function(A, K) {
    return (atMostK(A, K) - atMostK(A, K - 1));
};

function atMostK(A, K) {
    let count = {};
    let maxArr = 0,left = 0;

    for (let right = 0; right < A.length; right++) {
        const rightInt = A[right];

        if (!(rightInt in count)) {
            count[rightInt] = 0;
        }

        if (count[rightInt] === 0) {
            K -= 1;
        }
        count[rightInt] += 1;

        while (K < 0) {
            const leftInt = A[left];
            count[leftInt] -= 1;
            if (count[leftInt] === 0) {
                K += 1;
            }
            left += 1;        
        }
        maxArr += right - left + 1;
    }

    return maxArr;
}
