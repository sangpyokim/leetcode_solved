
var MyCalendar = function() {
    this.events = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start2, end2) {
    const len = this.events.length
    
    for (let i = 0; i < len; i++) {
        const [start1, end1] = this.events[i]
        
        if (Math.max(start1, start2) < Math.min(end1, end2)) {
            return false
        }
    }
    this.events.push([start2, end2])
    this.events.sort((a,b) => a[1]-b[1])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */