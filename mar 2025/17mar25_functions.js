function test (arr1, arr2){
    if (arr1.length !== arr2.length) { 
        return false;
    };

    // from here both arr1 and arr2 Lengths are same (FOR SURE)
    console.log(arr1.length, arr2.length);
    
    for (var i= 0; i < arr1.length; i++){ 
        // if(1 !== 5){ => true
        console.log("before "+ i);
        // 1 !== 1
        if(arr1[i] !== arr2[i]){
            return false;
        };
        console.log("after "+ i);
    }
    
    // 
    // FOR SURE: now I know all the elements are similar
    return true;
};

// console.log(test([1,2,3], [1,3,2])); 
console.log(test([2,5,3], [1,2,3]));



// dog !== human
// bat !== human
// cow !== human

// then what are those? -> animal

// 1 !== 1 false
// 2 !== 2 false
// 3 !== 3 false

// then both arrays are what? -> similar in number/element and order
