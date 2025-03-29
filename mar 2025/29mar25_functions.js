var arr = [3,2,1,4,2,5,6,8,1,3,10];
function findLowerNum (collections) {
    var lowestNum = collections[0];
    for (let i = 0; i < collections.length; i++) {
        if (collections[i] < lowestNum) {
            lowestNum = collections[i];
        }; 
    };
    return lowestNum;
};
// console.log(findLowerNum(arr));


// function findDuplicateElements (arr) {
//     var duplicateNumbers = [];
//     for (var i = 0; i < arr.length; i++) {
//         var num = arr[i];
//         if (arr[0] === arr[2+1]) {
//             duplicateNumbers.push(arr[i+1]);
//             break;
//         }
//     }
// }

var arr2 = [2,8,1,2,4,1]; // [2,1]

function findDuplicateElements (arr) {
    var duplicateNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            // console.log("i-th element: ", arr[i]);
            // console.log("j-th element: ", arr[j]);
            if(num === arr[j]) {
                duplicateNumbers.push(num);
            }
        } 
    }
    return duplicateNumbers;
}

console.log(findDuplicateElements(arr2));


// you have one best friend who needs a heart, 2 kidnies and brain to survive after an accident
// you have 3 healthy people (that you dont know them), who can donate those orgrans.
// will you take their organs to save your fried's precious life?
// sure! i'd like to!

// Result: your decision killed 3 people who has family each. each family has 2 childrens , they lost their father or mother.
// those three people also have their parents alive. all those parents lost their child.

// updated -> nah! 

// your frined actully need only brain.

// updated -> no!

// all those donars has no one left in the world

// update -> no donation


