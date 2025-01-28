// 1 year = second?

// 1 year = 365 days
// 1 day = 24 hours
// 1 hour = 60 minutes
// 1 minute = 60 seconds
// Result in second(1 year): 60 * 60 * 24 * 365

var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

var hoursInADay = 24;
var daysInAYear = 365;
var secondsInAYear = secondsInAnHour * hoursInADay * daysInAYear;
console.log(secondsInAYear);

var zaafirAge = 11;
var zaafirAgeInSecond = secondsInAYear * zaafirAge;
console.log(zaafirAgeInSecond) // 346896000 seconds (347 millions seconds)