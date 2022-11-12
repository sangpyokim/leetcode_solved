
var MedianFinder = function() {
    this.items = []
    this.median = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let check = false
    
    const len = this.items.length
    for (let i = 0; i < len; i++) {
        if (num > this.items[i]) {
            this.items.splice(i, 0, num)
            check = true
            break;
        }
    }
    if (!check) this.items.push(num)
};

/**
 * @return {number}
 */

MedianFinder.prototype.findMedian = function() {
    const len = this.items.length
    if (len % 2 === 1) {
        return this.items[Math.floor(len/2)]
    } else {
        const a = Math.floor(len/2)-1
        const b = Math.ceil(len/2)
        const res = (this.items[a] + this.items[b]) /2
        return res
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */