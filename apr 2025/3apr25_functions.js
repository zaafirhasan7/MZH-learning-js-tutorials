// *
// **
// ***
// ****
// *****


function rightTriangle (n) {
    // outer loop => row
    // inner loop => row <- *
    var row = "";
    for (var i = 1; i <= n; i++) {
        row = "";
        for (var j = 1; j <= i; j++) {
            // row = "";
            row = row + "*"; //***  
        }
        console.log(row);
    }
} 

// rightTriangle(5);

// initally row is empty string
// in each inner loop you just concatenate one * with the row variable
// j <= 1 : (reset row) *
// j <= 2 : (reset row) **
// j <= 3 : (reset row) *** 
// j <= 4 : (reset row) ****
// j <= 5 : (reset row) ***** 
// j <= 6 : (reset row) ******
// j <= 7 : (reset row) ******* 

// RESET (make something to its default mode , "")

// **** + * + * + * + * + * = *********



// ********
// ********
// ********
// ********


function squarePattern (n) {
    // outer loop => row
    // inner loop => row <- *
    var row = "";
    for (var i = 1; i <= n; i++) {
        row = "";
        for (var j = 1; j <= n; j++) {
            // row = "";
            row = row + "*"; //***  
        }
        console.log(row);
    }
}

squarePattern(8);