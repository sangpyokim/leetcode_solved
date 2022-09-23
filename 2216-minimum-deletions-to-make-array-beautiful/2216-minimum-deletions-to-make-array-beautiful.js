var minDeletion = function (nums) {
    const n = nums.length;

    let deletes = 0;
    for (let i = 0; i < n - 1; i++) {
        let j = i - deletes; // new i
        if (
            j % 2 === 0 && //
            nums[i] === nums[i + 1]
        ) {
            deletes++;
        }
    }

    // nums.length must be is even, if odd delete 1 more
    return deletes + ((n - deletes) % 2);
};