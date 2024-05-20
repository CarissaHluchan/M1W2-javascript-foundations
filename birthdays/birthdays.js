function createBirthday(name, month, day) {
    var birthday = {
        name: name,
        month: month,
        day: day,
    }
    return birthday;
}
// what does it take in - 3 paramerters a name, month, day
// does it return anything - return the object
// what is it's purpose - creates a lsit of objects


function celebrateBirthday(birthday) {
    // what does it take in - an object
    // what is it's purpose - sends a message to celebrate a given persons birthday
    // does it return anything - returns a string with a date and a name
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, month) {
    var birthdayCount = 0;
    for (var i = 0; i < birthdays.length; i++) {
        if (birthdays[i].month === month) {
           birthdayCount += 1;
        }
    }
    return birthdayCount
}
// what does it take in - 2 parms birthdays and month
// does it return anything - countBirthdays
// what is it's purpose - a count of all the birthdays in a month




// what does it take in -
// does it return anything -
// what is it's purpose -

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays,
};