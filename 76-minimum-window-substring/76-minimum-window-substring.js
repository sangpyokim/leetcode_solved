var minWindow = function(s, t) {
    let need ={}, window={};
    for(let char of t){
        if(!need[char]) need[char] =1
        else need[char] = need[char]+1
    }
    
    let left=0, right =0;
    let valid =0, len=Object.keys(need).length;
    let minLen = s.length+1, minStr="";
    
    while(right<s.length){
        const d =s[right]
        right++;
        
        if(!window[d]) window[d]=1;
        else window[d]+=1
        
        if(need[d] && need[d] === window[d]){
            valid++;
        }
        
        while(valid === len){
            if(right-left<minLen){
                minStr=s.slice(left, right)
                minLen = right- left
            }
            
            let c = s[left]
            left+=1
            window[c]= window[c]-1
            
            if(need[c] && window[c]<need[c]){
                valid--
            }
        }
    }
    
    return minStr
};