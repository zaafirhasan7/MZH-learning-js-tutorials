var longString = "My long string is long";
var x = longString.slice(3,14); // not inclusive for ending index
console.log (x);// long string

var noEndPoint = longString.slice(3);
console.log (noEndPoint);// long string is long