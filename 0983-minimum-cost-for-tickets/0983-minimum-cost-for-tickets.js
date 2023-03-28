/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, cost) {
    const table = new Array(days[days.length-1]+1);
    
    table[0] = 0
    
    for (let i = 1; i < table.length; i++) {
        if (!days.includes(i)) table[i] = table[i-1];
        else {
            table[i] = Math.min(
                table[Math.max(0, i - 1)] + cost[0],
                table[Math.max(0, i - 7)] + cost[1],
                table[Math.max(0, i - 30)] + cost[2]
            );
        }
    }
    
    return table[table.length-1]
};

