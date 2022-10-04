var find132pattern = function(nums) {
    let m = -Infinity
    // 스택 초기화
    const stack = []
    // nums를 순회
    for (let i = nums.length - 1; i >= 0; i--) {
        // 감소 스택
        while (nums[i] > stack[stack.length - 1]) {
            m = stack.pop()
        }
        
        // console.log(stack, m)
        // If m is greater than nums[i], return true...
        
        // 현재 값이 minimum보다 크면 true?
        if (nums[i] < m) {
            return true
        }
        
        stack.push(nums[i])
    }
    
//     for (let i = 0; i < nums.length; i++) {
//         while(stack.at(-1) > nums[i]) {
//             m = stack.pop()
//         }
//         if (nums[i] < m) return true
        
//         stack.push(nums[i])
//     }

    return false
};