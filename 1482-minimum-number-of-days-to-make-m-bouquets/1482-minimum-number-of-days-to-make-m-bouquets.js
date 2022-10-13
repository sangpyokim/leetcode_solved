var minDays = function (bloomDay, m, k) {
  let n = bloomDay.length;
  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;
  if (m * k > n) {
    return -1;
  }
  while (left < right) {
    let mid = Math.floor(left / 2 + right / 2);
    let flowers = 0;
    let bouque = 0;
      
    for (let j = 0; j < n; j++) {
      if (bloomDay[j] > mid) {
        flowers = 0;
      } else {
        flowers++;
          
        if (flowers >= k) {
          bouque++;
          flowers = 0;
        }
      }
    }
      
    if (bouque < m) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};