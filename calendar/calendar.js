function createEvent(title, month, day) {
    var event = {
        title: title,
        month: month,
        day: day,
    }
    if (day < 1 || day > 31) {
        return `Error: ${day} is not a valid day`;
    } else {
        return event;
    }
    
    // what does it take in - 3 parameters title month and day
// does it return anything - an object with a title month and day
// what is it's purpose - it creates an object to hold a event
}

function createCalendar(name, events) {
    var calendar = {
        owner: name,
        events: events,
    }
    return calendar;
// what does it take in - 2 parameters owner and events
// does it return anything - an object that has owner and events
// what is it's purpose - it ties a name to event(s)
}

function reportMonthlyEvents(calendar, month){
    var monthlyEvents = [];
    for (var i = 0; i < calendar.events.length ; i++) {
        if (calendar.events[i].month === month) {
            monthlyEvents.push(calendar.events[i]);
        }
    }

    return monthlyEvents;
    // what does it take in - 2 paramenters calendar object and string of month
// does it return anything - monthlyEvents which is an array of events
// what is it's purpose - know all the events based on month
}
// what does it take in -
// does it return anything -
// what is it's purpose -

module.exports = { 
    createEvent,
    createCalendar,
    reportMonthlyEvents,
 };