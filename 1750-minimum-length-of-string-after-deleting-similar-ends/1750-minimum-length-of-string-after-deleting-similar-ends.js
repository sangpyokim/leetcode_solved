var minimumLength = function(s) {
    let l =0, r = s.length-1;
    
    while(l < r) {
        const leftChar = s[l]
        const rightChar = s[r]
        if (leftChar !== rightChar) return r - l + 1
        
        while(leftChar === s[l+1]) {
           l++   
        }
        while(rightChar === s[r-1]) {
            r--
        }
        l++
        r--
    }
    const len = r-l+1
    if (len <= 0) return 0
    else return len
};