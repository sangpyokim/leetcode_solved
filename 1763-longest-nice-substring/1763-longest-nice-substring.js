const longestNiceSubstring = (s) => {
    if (s.length < 2) return "";
    
    let arr = [...s];
    
    let set = new Set(arr);
    
    for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        
        if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) continue;
        
        const sub1 = longestNiceSubstring(s.substring(0, i));
        
        const sub2 = longestNiceSubstring(s.substring(i + 1));
        
        
        return sub1.length >= sub2.length ? sub1 : sub2;
    }
    
    
    return s; 
}