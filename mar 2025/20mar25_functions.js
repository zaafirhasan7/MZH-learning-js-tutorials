function test (cat1Gender, cat2Gender) {
    // checking if parameter values are valid
    var validValues = ['male', 'female'];
    for (var i = 0; i < validValues.length; i++) {
        if (!validValues.includes(cat1Gender) || !validValues.includes(cat2Gender)) {
            return "please put a valid gender as parameter!"
        }
    }

    if (cat1Gender === "male" && cat2Gender === "male") {
        return "can't marry"
    } else if (cat1Gender === "female" && cat2Gender === "female") {
        return "can't marry"
    } else if (cat1Gender === "male" && cat2Gender === "female") {
        return "marry"
    } else {
        return "marry"
    }
};

var tuntun = {
    name: "Tuntun",
    gender: "male"
};

var ollie = {
    name: "Ollie",
    gender: "female"
}; 

var reo = {
    name: "Reo",
    gender: "male"
};

var mote = {
    name: "Mote",
    gender: "female"
};

var result = test(mote.gender, tuntun.gender);
console.log(result);
