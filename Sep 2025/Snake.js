class Snake {
    constructor () {
        this.segments = [
            new Block(7,5),
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



};