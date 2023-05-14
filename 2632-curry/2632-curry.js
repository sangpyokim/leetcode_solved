var curry = function(fn) {
    
    
 return curried = (...args) => {
    if (args.length < fn.length) {
      return (...args2) => curried(...args, ...args2);
    }
    return fn(...args);
  };
};