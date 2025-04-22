var i = 0;
$("#heading").offset({top:0,left:0});

function movingH1Element () {
  var arr = [
    {top:0,left:200}, 
    {top:200,left:200},
    {top:200,left:0},
    {top:0,left:0}
  ];
  $("#heading").offset(arr[i]);

  i= (i+1) % arr.length; 
};

var intervalTime= 1000;
var intervalId = setInterval(movingH1Element, intervalTime);


var counter = 1;
$("#heading").click(()=>{
  // cancel the old interval
  clearInterval(intervalId);

  if (counter >= 10) {
    $("#heading").text("you win");
    return;
  }
   
  // decrease interval time
  intervalTime -= 80;
  // start new interval
  intervalId = setInterval(movingH1Element, intervalTime);

  // change text
  $("#heading").text(counter);
  counter++;
});