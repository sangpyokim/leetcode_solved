const searchMatrix = (matrix, target) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = 0, col = matrix[0].length - 1;
    while(row < rows && col >= 0) {
        if(matrix[row][col] === target) {
            return true;
        }
        if(matrix[row][col] < target) {
            row++;
        }else {
            col--;
        }
    }
    return false;
};