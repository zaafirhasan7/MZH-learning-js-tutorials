var friends = ["x", "y", "z"];
for (var i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>")
}
$("p").hide().fadeIn(4000);
$("p").append(" smells!");

// flashing heading element
for (var i = 1000; i <= 5000; i = i + 1000) {
    $("#main-heading").delay(10000).fadeOut(i).fadeIn(i);
}

// add a h6 element
$("body").append("<h6>testing fadeTo()</h6>");
$("h6").fadeTo(2000, 0.7);

