function createBarber(name, earnings, haircuts) {
    var barber = {
        name: name,
        earnings: earnings || 0,
        haircuts: haircuts || [],
    }
    return barber
}

function giveCompliment(haricuts) {
    return `This ${haricuts.style} looks great!`
}

function cutHair(barber, haircut) {
    barber.haircuts.push(haircut);
    barber.earnings += haircut.price;
    return barber;
}

function listStyles(barber, hairLength) {
    var hairLengthStyles = [];
    for (var i = 0; i < barber.haircuts.length; i++) {
        if (barber.haircuts[i].hairLength === hairLength) {
            hairLengthStyles.push(barber.haircuts[i].style)
        }
    }
    return hairLengthStyles;
}

module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};