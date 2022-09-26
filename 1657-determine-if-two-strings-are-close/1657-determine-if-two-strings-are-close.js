var closeStrings = function (w1, w2) {
    const aCharCode = "a".charCodeAt();
    // get counts of w1 & w2
    counts1 = w1.split("").reduce((arr, c) => (arr[c.charCodeAt() - aCharCode]++, arr), new Array(26).fill(0));
    counts2 = w2.split("").reduce((arr, c) => (arr[c.charCodeAt() - aCharCode]++, arr), new Array(26).fill(0));

    // same char, does not exist in both w1 & w2 - fail
    if (counts1.some((_, i) => (counts1[i] && !counts2[i]) || (!counts1[i] && counts2[i]))) return false;

    // just the counts, in order, of w1 & w2 - do they match?
    return counts1.sort((a, b) => a - b).toString() === counts2.sort((a, b) => a - b).toString();
};