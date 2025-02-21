var score = {
    "Aahil": 0,
    "Arabi": 0,
    "tanvir": 0
}

score.Aahil += 6;
score.Arabi += 12;
score.tanvir += 9;
console.log(score);

score.Arabi += 2;
console.log(score);

score.Aahil += 6;
score.Arabi -= 5;
console.log(score);

score.tanvir = 100;
console.log(score);


//challenge 2

var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

var x = myCrazyObject['some array'][2].number;
console.log(x);
