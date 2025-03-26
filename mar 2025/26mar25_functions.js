// Palindrome: kayak, deed, noon

function isPalindrome (word) {
    // if the from left side and right side reads same, then it should return true, else false
    var reversedWord= "";
    for (var i=word.length-1; i >= 0; i--) {
        reversedWord = reversedWord + word[i];
    }

    // compare reverse word and original word, if they are the same, then it will return true, else false
    if (reversedWord === word) {
        return true;
    }
    return false;
}

console.log(isPalindrome("kayak"));


// find the vowels (a,e,i,o,u)
// my name is zaafir => aeiaai
function findAllTheVowels(sentence){
    var vowels = ["a","e","i","o","u"];
    var allVowels = "";
    for (var i = 0; i < sentence.length; i++) {
        // sentence[i] => "m"
        for (var j = 0; j < vowels.length; j++) {
            // vowels[j] => "a"
            if (sentence[i] === vowels[j]) {
                allVowels = allVowels + sentence[i];
            };
        };
    }
    return allVowels;
};

console.log(findAllTheVowels("my name is zaafir"));
console.log(findAllTheVowels("glyph"));
