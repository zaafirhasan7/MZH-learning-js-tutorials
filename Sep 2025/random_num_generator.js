// genereate random numbers between 0 to 9
for (var i = 0; i < 7; i++) {
    Math.random(); // 0-1 (1 not inclusive)
    // console.log(Math.floor(Math.random())); // only 0 , Only lower bound

    // Lower bound
    // Math.floor(Math.random())
    // genrate random number only 1
    // console.log(Math.floor(Math.random()+55)); // only 55

    // Lower bound and Upper bound
    // using multiplication(*)
    // 0.99 * 10 = 9.9 ~ 9 <-- max case
    // 0.99 * 11 = 10.89 ~ 10 <-- max case
    // 0.83 * 10 = 8.3 ~ 8
    // 0.00 * 10 = 0.0 ~ 0 <-- lowest case

    // using plus(+)
    // 0.83 + 10 = 10.83 ~ 10
    // 0.99 + 10 = 10.99 ~ 10
    // 0.01 + 10 = 10.01 ~ 10

    // generate 0-3 random numbers
    // console.log(Math.floor(Math.random()*3+1));


    // min to max random numbers
    let min = 0;
    let max = 3;

    // console.log(Math.floor(Math.random() * (max + 1)));

    // min to max random numbers
    min = 15;
    max = 17;
    let random = Math.floor(Math.random() * (max-min)) + min;
    console.log(random);
};

