function clickHandler (event) {
    console.log("click! " + event.pageX + " " + event.pageY);
}
$("#heading").click(clickHandler);