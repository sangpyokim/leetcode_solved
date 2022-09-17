var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');

    for (let i in path) {
        if (path[i]=='.' || path[i]=='') continue;
        if (path[i]=='..') stack.pop();
        else stack.push(path[i]);
    }
    
    return '/'+stack.join('/');
};