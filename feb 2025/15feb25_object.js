var fullName = "Mohammed Zaafir";

var harmonyCat = {
    "legs":3,
    "name":"harmony",
    "color name":"tortoiseShell",
    "toys": ["lego car", "toy 2", "toy 3"]
};

var student1 =  {
    name: fullName,
    intelligence_level: "improving",
    roll: 1381938,
    class: "sfsf",
    parents_phone_no: 2978392742947,
    friends: ["Aahil", "Arabi", "tanvir"],
    cat: harmonyCat
};

console.log(student1['cat']);

console.log(harmonyCat['color name']);
// console.log(harmonyCat.color Name); // there is NO WAY you can use dot notation using spaced key

var keys = ["name", "toys", "color name"];

console.log(harmonyCat[keys[1]]); // keys[1] => "color"









