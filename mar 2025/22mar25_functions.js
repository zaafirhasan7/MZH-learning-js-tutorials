// [1,2,3,"team"]
// [1,2]
// output=> 6
var addingArrayLengths = function (arr1,arr2) {
    // validate your arguments
    if ( !Array.isArray(arr1) || !Array.isArray(arr2)){
        return;
    };

    var result = arr1.length + arr2.length;
    return result;
};
var output = addingArrayLengths([1,2,3], "sD");
console.log(output);
