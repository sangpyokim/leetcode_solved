var surfaceArea = function(grid) {
    let surface = 0, surfaceOfOneElement = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            surface+=grid[i][j]==0 ? 0 : grid[i][j]==1 ? 6: 6+(grid[i][j]-1)*4;
            surfaceOfOneElement=0;
            if(i-1>=0) surfaceOfOneElement += Math.min(grid[i-1][j], grid[i][j]);
            if(i+1<grid.length) surfaceOfOneElement += Math.min(grid[i+1][j], grid[i][j]);
            if(j-1>=0) surfaceOfOneElement += Math.min(grid[i][j-1], grid[i][j]);
            if(j+1<grid[0].length) surfaceOfOneElement += Math.min(grid[i][j+1], grid[i][j]);
            surface-=surfaceOfOneElement;
        }
    }
    return surface;
};