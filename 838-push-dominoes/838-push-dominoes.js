var pushDominoes = function(dominoes) {
    let l=0, r=1;
    const arr = ("L"+dominoes+"R").split("");
    console.log(arr)
    
    while(l<arr.length-1){
        while(arr[r]=='.') 
            r++;
        if(arr[l]==arr[r]) 
            for(let i=l+1; i<r; i++) 
                arr[i]=arr[l];
        if(arr[l]>arr[r]) 
            for(let i=1; i<=(r-l-1)/2; i++){
                arr[l+i] = 'R';
                arr[r-i] = 'L';
            }   
        l=r++;
    }
    return arr.slice(1,arr.length-1).join("");
};