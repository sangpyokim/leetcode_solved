var removeDuplicates = function(nums) {
    let a = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            a++
            nums.splice(i, 1)
            i--
        }  
    }
};