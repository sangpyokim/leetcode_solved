var sortColors = function(nums) {
    let s = 0;
    let e = nums.length-1;
    let i = 0;

   while(i<=e){
        if(nums[i]==2){
            [nums[e], nums[i]] = [nums[i], nums[e]]
            e--;
        }
        else if(nums[i]==0){
            [nums[s], nums[i]] = [nums[i], nums[s]]
            s++;
            i++;
        }
       else{
           i++;
       }
    }
    return nums;
}