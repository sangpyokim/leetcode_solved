var maximumBags = function(capacity, rocks, additionalRocks) {
    for (let i = 0; i < capacity.length; i++) {
        rocks[i] = capacity[i] - rocks[i]
    }
    
    rocks.sort((a, b) => a - b)
    
    let total_bags = 0
    let len = 0
    while(additionalRocks > 0 && len < rocks.length){
        additionalRocks -= rocks[len]
        if (additionalRocks >= 0) {
            total_bags++
        }
        len++
    }
    return total_bags
};
