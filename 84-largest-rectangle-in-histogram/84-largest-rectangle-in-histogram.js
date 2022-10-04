const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);

    for (let i = 0; i < heights.length; i++) {
        let lastElement = stack[stack.length-1]
        const cur = heights[i]
        
        while (stack.length && heights[lastElement] > cur) {
            const popElement = stack.pop();
            lastElement = stack[stack.length-1]
            maxArea = Math.max((i - lastElement - 1) * heights[popElement], maxArea);
        }
        // console.log(stack, maxArea)
        stack.push(i);
    }
    
    return maxArea;
};