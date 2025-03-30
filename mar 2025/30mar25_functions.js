// *
// **
// ***
// ****
// *****
// ******

function  trianglePattern (s, n) {
    for (var i = s; i <= n; i++) {
        var row = "";
        for (var j = 1; j <= i; j++) {
            // console.log(`i: ${i}, j: ${j}`);
            row = row + "*";
        }
        console.log(row);
    }
};

// trianglePattern(5,15);

function fun(n){
    for (var i = 1; i<=n; i++){
        console.log(`i: oh no! I am stuck at: ${i}`);
        for (var j = 1; j<=n; j++){
            console.log(`yeppy I can do more than you mr i, I am j: ${j}`);
        } 
        console.log("---------");
    }
}

    

fun(5);