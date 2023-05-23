/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.items = []
    for (let num of nums) {
        this.add(num)
    }
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    
    let check = false
    const len = this.items.length
    for (let i = 0; i < len; i++) {
        if (val > this.items[i]) {
            this.items.splice(i, 0, val)
            check = true
            break
        }
    }
    
    if (!check) this.items.push(val)
    return this.items[this.k-1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */