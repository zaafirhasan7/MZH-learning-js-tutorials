class Snake {
    constructor () {
        this.segments = [
            new Block(7,5),
            new Block(6,5),
            new Block(5,5)
        ];

        this.direction = "right";
        this.nextDirection = "right";
    }
};