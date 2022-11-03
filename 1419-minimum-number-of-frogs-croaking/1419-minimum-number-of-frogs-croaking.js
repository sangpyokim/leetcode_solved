let minNumberOfFrogs = (S) => {
    const cnt = { c: 0, r: 0, o: 0, a: 0, k: 0 };
    let max = -Infinity;
    
    for (const c of S) {
        if (!(cnt.c >= cnt.r && cnt.r >= cnt.o && cnt.o >= cnt.a && cnt.a >= cnt.k)) return -1;
        cnt[c]++;
        if (c === 'c') max = Math.max(max, cnt.c - cnt.k);
    }
    
    return cnt.c == cnt.r && cnt.r == cnt.o && cnt.o == cnt.a && cnt.a == cnt.k ? max : -1;
};