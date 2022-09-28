var countPalindromicSubsequence = function(s) {
    var l={}
    var r={}
    var res=0

    var marked= new Set();
    for (let i=0; i<s.length; i++){
        if (l[s[i]]==undefined)l[s[i]]=i
        r[s[i]]=i
    }
    
    for (let key in l){
        for (let i=l[key]+1; i<r[key]; i++){
          if (!marked.has(key+s[i]+key)){
              marked.add(key+s[i]+key);
              res++;
          }
        }
    }
    
    return res;
}