/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    const len = people.length
    people.sort((a,b) => a-b)
    
    let i, j

    for (i = 0, j = people.length - 1; i <= j; j--)
        if (people[i] + people[j] <= limit) i++;
    
    return people.length - 1 - j;
};