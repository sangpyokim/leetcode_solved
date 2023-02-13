var countOdds = function(low, high) {
    
    let [odd_lowerbound, odd_upperbound] = [-1, -1];
    
    // compute the smallest odd number in range
    if( low % 2 == 1){
        odd_lowerbound = low;
        
    }else{
        odd_lowerbound = low+1;
    }
    
    // compute the largest odd number in range
    if( high % 2 == 1){
        odd_upperbound = high;
        
    }else{
        odd_upperbound = high-1;
    }
    
    
    // compute the number of odd numbers in range
    return 1 + ((odd_upperbound - odd_lowerbound) >> 1);
    
    
};