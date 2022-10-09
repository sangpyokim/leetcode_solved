var findTarget = function(root, k) {
    let answer = false
    const list = [];
    
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            list.push(cur.val)
            if (cur.left)  queue.push(cur.left);
            if (cur.right)  queue.push(cur.right);
        }
    }

    let i = 0;
    let j = 1;
    while (i !== list.length-1) {
        if (list[i] + list[j] === k) return answer = true;
        else {
            
            if (j === list.length-1) {
                i++;
                j = i + 1;
            } else {
                j++
            }
        }
        
    }
    
    

    return answer
};