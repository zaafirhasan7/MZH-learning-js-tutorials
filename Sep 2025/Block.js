class Block {
    constructor (col, row) {
        this.col = col;
        this.row = row;
    };

    drawSquare (ctx, blockSize, color ) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    };

    // make a function to demo, column moves horizontally
    demoColMovement (ctx, blockSize, color, height) {
        ctx.fillStyle = color;
        var stepSize = 0;
        var size = blockSize;
        setInterval(() => {
            var x = blockSize;
            var y = blockSize;
            ctx.fillStyle = color;
            ctx.clearRect(x, y, 38*blockSize, 38*blockSize);
            
            var colStartX = x + stepSize;
            ctx.fillRect(colStartX, y, blockSize, height-blockSize*2);
            if(colStartX > 370 || colStartX < blockSize){
                size = -size;
            } 

            stepSize+=size;
            if (stepSize < blockSize){
                stepSize = blockSize;
            }

            console.log("size " + size);
            console.log("stepSize " + stepSize);
            console.log("colStartX " + colStartX);

        }, 200);
    };
    

    // show how the columns move:
    // it should display from each part of the canvas sequencially
    // if it touches the edges, it will bounce back to opposite direction

    //solutions:
    // 1. make a column
    // 2. make the column move each step horizontally
    // 2.1 what makes the column move? changing the x position
    // 3. bounce back to the opposite direction when
    // column touches the wall



};