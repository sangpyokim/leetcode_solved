var BrowserHistory = function(homepage) {
    this.cur = 1;
    this.history = [homepage];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    if(this.cur !== this.history.length){
       this.history = this.history.slice(0,this.cur);
    }
    this.cur++;
    this.history.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if(this.cur-steps-1 < 0){
        this.cur = 1;
    }else{
        this.cur = this.cur - steps;
    }
    return this.history[this.cur-1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if(this.cur+steps>this.history.length){
        this.cur = this.history.length
    }else{
        this.cur = this.cur+steps
    }
    return this.history[this.cur-1];
};