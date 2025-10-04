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

    drawCircle (ctx, blockSize, color ) {
        var centerX = this.col * blockSize + blockSize / 2;
        var centerY = this.row * blockSize + blockSize / 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(centerX, centerY, blockSize / 2, 0, Math.PI * 2);
        ctx.fill();
    };

    // make a function to demo, column moves horizontally
    demoColMovement (ctx, blockSize, color, height) {
        var stepSize = 0;
        var moveDirection = blockSize;
        var x = blockSize;
        var y = blockSize;
        setInterval(() => {
            ctx.fillStyle = color;
            ctx.clearRect(x, y, 38*blockSize, 38*blockSize);
            
            var colStartX = x + stepSize;

            ctx.fillRect(colStartX, y, blockSize, height-blockSize*2);
            if(colStartX > 370 || colStartX < blockSize){
                moveDirection = -moveDirection;
            } 

            stepSize+=moveDirection;
        }, 200);
    };
    
    equal (anotherBlock) {
        // col or row, if any of them are not equal,
        // then we know the two blocks are not same positioned.
        // if (this.col !== anotherBlock.col || this.row !== anotherBlock.row) {
        //     return false;
        // }

        // from here everything is true case
        // return true;

        return this.col === anotherBlock.col  &&
                this.row === anotherBlock;

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