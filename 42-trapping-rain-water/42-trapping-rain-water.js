function trap(height) {
  if (height == null || height.length === 0) return 0;

  let l = 0;
  let r = height.length - 1;

  let lMax = 0;
  let rMax = 0;

  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    rMax = Math.max(rMax, height[r]);
    res += lMax - height[l];
    res += rMax - height[r];

    height[l] < height[r] ? l++ : r--;
  }

  return res;
}