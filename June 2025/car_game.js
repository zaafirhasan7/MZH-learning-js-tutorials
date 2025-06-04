class Car {
  constructor(x, y, url, speed) {
    this.x = x;
    this.y = y;
    this.url = url;
    this.speed = speed;

    this.draw();
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
  }

  moveRight(speed) {
    this.x += speed;
    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }

  moveLeft(speed) {
    this.x -= speed;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }

  moveUp(speed) {
    this.y -= speed;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }

  moveDown(speed) {
    this.y += speed;

    this.carElement.css({
      left: this.x,
      top: this.y,
    });
  }
}

var acura = new Car(20, 20, "http://nostarch.com/images/car.png", 10);
var nissan = new Car(20, 200, "http://nostarch.com/images/car.png", 10);
// var apollo = new Car(10, 350, "https://www.motorbiscuit.com/wp-content/uploads/2021/11/Apollo-EVO-Apollo-3-scaled.jpeg")

// setInterval(() => {
//   nissan.moveRight(10);
// }, Math.floor(1, 2, 3, 4, 5));

// setInterval(() => {
//   acura.moveRight(11);
// }, Math.floor(1, 2, 3, 4, 5));

// right arrow key used to move right side
$(document).keydown((event) => {
  if (event.keyCode == 39) {
    acura.moveRight(10);
  }
});

// left arrow key used to move left side
$(document).keydown((event) => {
  if (event.keyCode == 37) {
    acura.moveLeft(10);
  }
});

$(document).keydown((event) => {
  if (event.keyCode == 38) {
    acura.moveUp(10);
  }
});

$(document).keydown((event) => {
  if (event.keyCode == 40) {
    acura.moveDown(10);
  }
});

$(document).keydown((event) => {
  if (event.keyCode == 32) {
    setInterval(() => {
      nissan.moveRight(10);
    }, Math.floor(1, 2, 3, 4, 5));

    setInterval(() => {
      acura.moveRight(11);
    }, Math.floor(1, 2, 3, 4, 5));
  }
});
