/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const arr = []
    const dp = []
    const len = profit.length
    for (let i in profit) {
        arr.push([endTime[i], startTime[i], profit[i]])
    }
    arr.sort((a,b) => a[0] - b[0])
    
    dp[0] = arr[0][2]
    
    let index, temp
    for(let i=1; i < len; i++) {
        index=-1;
            
        let l = 0, h = i-1;
        while(l<=h) {
            let m = (l+h) >>> 1
            if(arr[m][0] <= arr[i][1]) {
                if (arr[m+1][0] <= arr[i][1]) {
                    l = m + 1;                    
                } else {
                    index = m;
                    break;
                } 
            } else {
                h = m-1
            }
        }

        if(index!=-1) temp = dp[index] + arr[i][2];
        else temp = arr[i][2];
        dp.push(Math.max(temp, dp[i-1]));
    }
    
    return dp.at(-1)
};