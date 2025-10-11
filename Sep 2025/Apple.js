class Apple{
    constructor(){
        this.position = new Block(10,10);
    }

    draw (ctx, blockSize) {
        this.position.drawCircle(ctx, blockSize, "limeGreen")
    }

    move () {
        // setting a random column and row position for the apple when it is eaten by the snake

        // find a random col
        // find a random row
        // use the random col and row to make a new block instance and 
        // use that instance to set the apple's position (correct, CLEAR)
        
        // lowest case  = 0
        // highest case = 0.99







    }
}