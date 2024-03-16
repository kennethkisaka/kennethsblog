function year() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    return currentYear;
}

function month() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    return currentMonth;
}

function daysOfMonth() {
    if ((year() % 400 == 0) || (year() % 4 == 0 && year % 100 != 0)) {
       return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

function printAsciiCalendar(year, month) {
    var b = []
    var firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    var previousMonthDays = daysOfMonth()[month-2];
    var currentMonthDays = daysOfMonth()[month-1];
    console.log(previousMonthDays)
    //previous month days in an array
    for (var i=1; i<=previousMonthDays; i++) {
        b.push(i);
    }
    //current month days in an array
    b = b.slice(-firstDayOfMonth)
    console.log(b)
    for (var i=1; i<=currentMonthDays; i++) {
        b.push(i)
    }
    //completing the remaining with next month days
    console.log(b)
    for (var i = 1; b.length < 35 ; i++) {
        b.push(i);
    }

    console.log(b)
    console.log(b.slice(-firstDayOfMonth));
}

// Example usage: Print ASCII calendar for March 2024
printAsciiCalendar(2024, 2);
