
var SmallestInfiniteSet = function() {
    this.arr = new Array(1000).fill(null).map((v, i) => true)
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    for (let i in this.arr) {
        if (this.arr[i] === true) {
            this.arr[i] = false
            
            return i*1 +1
        }
    }

};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    for (let i in this.arr) {
        if (i*1 +1 === num) {
            this.arr[i] = true
            return
        }
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */