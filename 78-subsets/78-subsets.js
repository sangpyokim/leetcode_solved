let subsets = function (nums) {
  const res = [];
    
  const backtracking = (nums, res, idx, path) => {
    res.push([...path]);

    for (let i = idx; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(nums, res, i + 1, path);
      path.pop();
    }
  };

  backtracking(nums, res, 0, []);

  return res;
};