class Apple{
    constructor(){
        this.position = new Block(10,10);
    }

    draw (ctx, blockSize) {
        this.position.drawCircle(ctx, blockSize, "limeGreen")
    }
}