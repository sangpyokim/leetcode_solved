const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);
    
    for (let i = 0; i < heights.length; i++) {
        const cur = heights[i]
        while( stack.length && heights[stack[stack.length-1]] > cur ) {
            const j = stack.pop()
            maxArea = Math.max(maxArea, (i - stack[stack.length-1] - 1) * heights[j])
        }
        stack.push(i)
    }
    
    return maxArea;
};