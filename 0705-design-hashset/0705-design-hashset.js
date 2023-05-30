/**
 * Initialize your data structure here.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var MyHashSet = function() {
    /* a hashset eh? 
     At first I thought we'd have to make our own hashing function, but
     we're getting numbers as input, so it's already a unique mapping
     Should we just create an array of size 1*10^6?
     
     Took a look at discuss, some drama there. Some camps say you should
     do the real thing, others think you should always take the notes into
     account.
     
     I think https://leetcode.com/explore/featured/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3410/discuss/356633/javaScript-solution-using-buckets-and-linked-list
     
     Makes a nice point, we should try to do the real-ish thing.
     
     Which seems to do a simple mod operation to "hash" the number
     
     and you then purposely create colisions, which you handle by having each entry 
     be a ll. The author of that page starts each with head(0) which I don't get why
     
     Ill try to make it without that and see how it goes.
     
     -- coding --
     
     works with the given input, and I like the node insert and deletion better than 
     the above example. less to explain to a new reader.
     
     Going to see if there are more test cases.
     
     https://leetcode.com/explore/featured/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3410/discuss/249425/A-big-LeetCode-TestCase
     
     has a nice long one, and it succeeds!
     
     Submitted but an error on test case 24
     
     I made a mistake in add:
     
        // if not, append it
        node.next = new ListNode(key);
        
    at this point, node.next could be null, so I should keep track of the last node
  
     
     */
    
    // To make this as real as possible, we determine the size before hand
    this.size = 1000
    this.arr = new Array(this.size);
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.hash = function(key) {
    // to make sure everyone ends up in a bucket
    
    return key % this.size;
}
MyHashSet.prototype.add = function(key) {
    const hash = this.hash(key);
    
    // First see if we've got this bucket at all created
    if (!this.arr[hash]) {
        this.arr[hash] = new ListNode(key);
    } else {
        // If the bucket exists, we need to follow the LL to see if it's in there
        let head = this.arr[hash]; // we don't need head really, but I like it for clarity
        let node = head;
        let last; // we'll keep track of the previous node for tying the ll back together
        
        while (node) {
            if (node.val === key) {
                return;
            }
            last = node;
            node = node.next;
        }
        
        // if not, append it
        last.next = new ListNode(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const hash = this.hash(key);
    
    if (!this.arr[hash]) {
        return;
    } else {
        let head = this.arr[hash];
        let node = head;
        let last; // we'll keep track of the previous node for tying the ll back together
        
        // find the value
        while (node) {
            
            if (node.val === key) {
                // if it happened to be head the logic is different
               if (node === head) {
                   this.arr[hash] = node.next;
               } else {
                   // remove node
                   last.next = node.next;
                   node.next = null; // not sure if JS needs this to garbage collect tbh
                   return;
               }
            }
            
            last = node;
            node = node.next;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const hash = this.hash(key);
    
    // contains is the easiest of the 3, just find bucket and follow ll
    if (!this.arr[hash]) {
        return false;
    } else {
        let head = this.arr[hash];
        let node = head;
        
        while (node) {
            if (node.val === key) {
                return true;
            }
            node = node.next;
        }
    }
    
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */