function movingMouseHandler (event) {
  $("#heading").offset({
    top:event.pageY,
    left:event.pageX
  });   
}

$("html").mousemove(movingMouseHandler);