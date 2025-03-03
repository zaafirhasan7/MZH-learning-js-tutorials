// challenge 3: H4CK3R SP34K

// javascript is awesome
// j4v4scr1pt 1s 4w3s0m3

// var output = "";
// output += "j"; // j
// output += "4"; // j4
// output += "v"; // j4v

var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";   
    } else if (input[i] === "o"){
        output += "0";
    } else {
        output += input[i]; // j, v, s, c, r, p, t, , s, , w, s, m
    }
}

console.log(output);

