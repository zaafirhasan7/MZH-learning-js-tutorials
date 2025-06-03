class Car {

    constructor(x, y, url) {
        this.x = x;
        this.y = y;
        this.url = url;
    }

    draw() {
        var carHtml = `<img src = ${this.url}>`;

        this.carElement = $(carHtml);

        this.carElement.css({
            position: "absolute",
            left: this.x,
            top: this.y,
            // height: "250px",
            // width: '450px',
            // "object-fit": "cover"
        });

        $("body").append(this.carElement);
    };

    moveRight () {
        this.x += 5;

        this.carElement.css({
            left: this.x,
            top:this.y
        });
    };

    moveLeft () {
        this.x -= 5;

        this.carElement.css({
            left: this.x,
            top:this.y
        });
    };

};







var acura = new Car (20, 20, "http://nostarch.com/images/car.png");
var nissan = new Car(100, 200, "http://nostarch.com/images/car.png");
// var apollo = new Car(10, 350, "https://www.motorbiscuit.com/wp-content/uploads/2021/11/Apollo-EVO-Apollo-3-scaled.jpeg")

acura.draw();
nissan.draw();
// apollo.draw();


// 5 != 100
// 95 != 100
// 100 != 100 False
// while(acura.x !== nissan.x){
    // acura.moveRight();
// }

setInterval(()=>{
    nissan.moveRight();
}, 45)


// right arrow key used to move right side
$(document).keydown((event)=>{
    if (event.keyCode == 39){
        acura.moveRight();
    }
})

// left arrow key used to move left side
$(document).keydown((event)=>{
    if (event.keyCode == 37){
        acura.moveLeft();
    }
})

