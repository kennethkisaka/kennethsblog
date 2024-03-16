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

function day() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate(); // Change to getDate() for day of the month
    return currentDay;
}

function daysOfMonth() {
    if ((year() % 400 == 0) || (year() % 4 == 0 && year() % 100 != 0)) { // Add parentheses around year()
       return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

function date() {
    var currentDate = new Date();
    var currentDateValue = currentDate.getDate(); // Change to currentDateValue to avoid redeclaration
    return currentDateValue;
}

function datesArray(year, month) {
    var b = [];
    var firstDayOfMonth = new Date(year, month, 1).getDay();
    var previousMonthDays = daysOfMonth()[month - 1];
    var currentMonthDays = daysOfMonth()[month];
    
    for (var i = 1; i <= previousMonthDays; i++) {
        b.push(i);
    }
    
    b = b.slice(-firstDayOfMonth);
    
    for (var i = 1; i <= currentMonthDays; i++) {
        b.push(i);
    }
    
    for (var i = 1; b.length < 35; i++) {
        b.push(i);
    }

    return b;
}

function actualDate() {
    var firstDayOfMonth = new Date(year(), month(), 1).getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("p-year").textContent = year();
    document.getElementById("p-month").textContent = months[month()];

    var asciiCalendarArray = datesArray(year(), month());
    for (var i = 0; i < 35; i++) {
        document.getElementById(i.toString()).textContent = asciiCalendarArray[i];
        if ((i >= firstDayOfMonth) && (i <= (firstDayOfMonth + daysOfMonth()[month()]) )) {
            document.getElementById(i.toString()).textContent = asciiCalendarArray[i];
            if (asciiCalendarArray[i] == date()) {
                document.getElementById(i.toString()).style.backgroundColor = "lightgray";
            }
        } else {
            document.getElementById(i.toString()).style.opacity = 0.5;
            console.log(firstDayOfMonth);
        }
    }
}

actualDate();
setInterval(actualDate, 1000);
