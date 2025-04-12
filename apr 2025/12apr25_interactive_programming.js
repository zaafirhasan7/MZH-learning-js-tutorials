var leftOffsetValue = 0;
function movingPElement () {
    $("p").offset({left:leftOffsetValue});
    leftOffsetValue++;
    if (leftOffsetValue === 200) {
        leftOffsetValue = 0;
    }
    
};
var intervalId = setInterval(movingPElement, 30);