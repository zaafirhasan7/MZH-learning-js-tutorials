

var points=[
    [50, 50],
    [50, 100],
    [100,100],
    [100, 50],
    [50,50]
];

function drawPoints (pointsArr) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    
    for (var i = 0; i < pointsArr.length; i++) {
        //console.log(points[i]);
        var x = pointsArr[i][0];
        var y = pointsArr[i][1];
        if(i==0) {
            ctx.moveTo(x,y);
        }
        ctx.lineTo(x,y);
    }

    ctx.stroke();
};

// drawPoints(points);

var mysteryPoints = [[50, 50], [50, 100], [25, 120],
[100, 50], [70, 90], [100, 90], [70, 120]];

var testRect= [[50,50],[200, 50],[200, 100],[50, 100],[50,50]];
drawPoints(points);