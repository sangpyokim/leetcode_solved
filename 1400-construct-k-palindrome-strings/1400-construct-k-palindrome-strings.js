var canConstruct = function(s, k) {
    if(k > s.length) {
        return false;
    }

    const map = new Map();    // O(26)
    for(let char of s) {    // O(n)
        map.set(char, map.get(char) + 1 || 1);
    }
    
    let oddCount = 0;
    
    for (let [k, v] of map) {
        if (v % 2 !== 0) oddCount++
        
        
    }
    if (oddCount > k) return false
    
    return true;
};
