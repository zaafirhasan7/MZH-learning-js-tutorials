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

var student1Keys = Object.keys(student1); // output is an array of Keys in string form
// console.log(student1Keys);



// Create an empty object and insert some key:values
var goodFriend = {};
goodFriend["favColor"] = "pink";
goodFriend["name"] = "Aahil";
goodFriend["age"] = 11;
goodFriend["gender"] = "male";

var goodFriendKeys = Object.keys(goodFriend);
// console.log(goodFriend["name"]);

var secondFriend = {};
secondFriend.name = "Arabi";
secondFriend['favorite color'] = 'white';
// console.log(secondFriend);
// console.log(secondFriend['age']);

// putting multiple obj in another obj
var friends = {goodFriend, secondFriend}
console.log(friends);

 




