class Snake {
    constructor () {
        this.segments = [
            new Block(7,5), // head
            new Block(6,5),
            new Block(5,5)
        ];


        this.direction = "right";
        this.nextDirection = "right";
    };

    draw (ctx, blockSize, color) {
        for (var i = 0; i < this.segments.length; i++) {
            this.segments[i].drawSquare(ctx, blockSize, color);
        };
    };

    move (score) {
        var head = this.segments[0];
        var newHead;
        this.direction = this.nextDirection;
        if (this.direction === "right") {
            newHead = new Block (head.col+1, head.row);
        } else if (this.direction === "left") {
            newHead = new Block (head.col - 1, head.row);
        } else if (this.direction === "up") {
            newHead = new Block (head.col, head.row-1);
        } else if (this.direction === "down") {
            newHead = new Block (head.col, head.row+1);
        }

        // collision checking
        if (this.checkCollision(newHead)) {
            gameOver();
            return;
        }
        
        // use the newHead(adding as the first element of the array)
        this.segments.unshift(newHead);

        // if apple : score increases, apple changes position
        // if no apple: delete the tail
        if(newHead.equal(apple.position)) {
            score++;
            apple.move();
        } else {
            this.segments.pop();
        }

    };

    checkCollision (newHead) {
        // compare with body
        for (var i = 0; i < this.segments.length; i++) {
            if (newHead.equal(this.segments[i])) {
                return true;
            }
        }

        // compare with borders (right, bottom, left, up)
        var rightCollision = blocksInWidth-1 === newHead.col;
        var bottomCollision = blocksInHeight-1 === newHead.row;
        var leftCollision = 0 === newHead.col;
        var topCollision = 0 === newHead.row;

        return rightCollision || bottomCollision || leftCollision || topCollision; // (FFTF->T)
    };


};