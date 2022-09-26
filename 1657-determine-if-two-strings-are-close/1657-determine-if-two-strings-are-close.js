var closeStrings = function (w1, w2) {
    const aCharCode = "a".charCodeAt();

    let counts1 = new Array(26).fill(0); // char vs its counts, for every char, of w1
    let counts2 = new Array(26).fill(0);
    for (let i = 0; i < w1.length; i++) counts1[w1[i].charCodeAt() - aCharCode]++;
    for (let i = 0; i < w2.length; i++) counts2[w2[i].charCodeAt() - aCharCode]++;

    for (let i = 0; i < 26; i++)
        if ((counts1[i] && !counts2[i]) || (!counts1[i] && counts2[i])) {
            return false; // same char, does not exist in both
        }

    // just counts in order, of w1 & w2 - do they match?
    return counts1.sort((a, b) => a - b).toString() === counts2.sort((a, b) => a - b).toString();
};