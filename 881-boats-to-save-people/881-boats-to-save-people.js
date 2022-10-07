var numRescueBoats = function(people, limit) {
    people.sort((a, b) => b - a);
    
    let i = 0, j = people.length-1;
    
    let count = 0;
    
    while (i <= j) {
        // 가장 가벼운 사람 + 가장 무거운 사람이 limit을 넘지않으면 j--
        if (people[i] + people[j] <= limit) j--;
        i++;
        count++;
    }
    return count;
};