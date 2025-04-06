// var newMyMommaText = prompt("please give a momma heading:"); 
// $("#main-heading2").text(newMyMommaText);

// add a paragraph inside the body
$("body").append("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem culpa veniam harum delectus, reprehenderit non blanditiis recusandae dolores facere, quos obcaecati beatae ratione fugiat accusamus ipsa architecto adipisci ut aperiam?</p>")
$("body").append("<h2>end</h2>")

// take fav hoby from 3 users and show them in website
for (var i = 1; i <= 3; i++) {
    var favHobby = prompt ("enter your hobby!");
    $("body").append("<p>" + "hobby" + i + " " + favHobby + "</p>");        
}

