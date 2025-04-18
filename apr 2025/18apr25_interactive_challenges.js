function rightMovement () {
  var rightMovement = $("#heading").offset({left:200});
  var firstX_Y = rightMovement.offset();
  console.log(firstX_Y); 
}


function downMovement () {
  var downMovement = $("#heading").offset({top:200 + firstX_Y.top,left:200});
  var secondX_Y = downMovement.offset();
  console.log(secondX_Y);
}

function leftMovement () {
  var leftMovement = $("#heading").offset({top:secondX_Y.top,left:secondX_Y.left - 200});
  var thirdX_Y = leftMovement.offset();
  console.log(thirdX_Y);
}

function upMovement(){
  var upMovement = $("#heading").offset({top: thirdX_Y.top - 200,left:thirdX_Y.left});
  var fourthX_Y = upMovement.offset();
  console.log(fourthX_Y);    
}

