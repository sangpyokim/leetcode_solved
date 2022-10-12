var solution = function(isBadVersion) {
    return function(n) {
        let left = 1
        let right = n
        
        let mid = Math.floor(left + (right - left) / 2)
        
        while(left < right) {
            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid +1
            }
            mid = Math.floor((right + left) / 2)
        }
        
        return left
    };
};