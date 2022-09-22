var maximumGroups = function(grades) {
    let count=1, length=grades.length;
    while(length-count > count) length-=count++;
    return count;
};