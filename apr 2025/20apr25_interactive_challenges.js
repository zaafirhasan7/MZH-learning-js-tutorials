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

  i= (i+1) % arr.length; // 0+1=1%4=1, 1+1=2%4=2, 2+1=3%4=3, 3+1=4%4=0, 0+1=1%4=1 
};


var intervalTime= 1000;
var counter = 1;
$("#heading").click(()=>{
  // start animation
  var newIntervalId = setInterval(movingH1Element, intervalTime);

  // change text
  $("#heading").text(counter);
  counter++;

  // cancel interval
  clearInterval(newIntervalId);

  // reduce interval time
  intervalTime = intervalTime - 5;
  
  if (counter === 10) {
    $("#heading").text("you win")
  }
  console.log(intervalTime);
});