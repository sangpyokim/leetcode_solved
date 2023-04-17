/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
        var kidsWithCandies = function(candies, extraCandies) {
            const answer = [];
            candies.forEach((value, index, arr) => {
                let a = value + extraCandies
                if (a >= Math.max(...candies)) {
                    answer.push(true)
                }else {
                    answer.push(false)
                }
            })
            return answer
        };