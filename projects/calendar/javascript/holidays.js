function getHoliday(month, day) {
    var holidays = {
        "January": {
            4: "World Braille Day (A/RES/73/161)",
            24: "International Day of Clean Energy (A/RES/77/327)",
            26: "International Day of Commemoration in Memory of the Victims of the Holocaust (A/RES/60/7)"
        },
        "February": {
            1: "World Interfaith Harmony Week, 1-7 February (A/RES/65/5)",
            2: "World Wetlands Day (A/RES/75/317)",
            4: "International Day of Human Fraternity (A/RES/75/200)",
            6: "International Day of Zero Tolerance to Female Genital Mutilation (A/RES/67/146)"
            // Add more holidays for February if needed
        },
        // Add holidays for other months here
        "December": {
            1: "World AIDS Day",
            2: "International Day for the Abolition of Slavery (A/RES/317(IV))",
            3: "International Day of Persons with Disabilities (A/RES/47/3)"
            // Add more holidays for December if needed
        }
    };

    var monthName = Object.keys(holidays)[month - 1];
    var monthHolidays = holidays[monthName];
    var holiday = monthHolidays[day];

    return holiday ? "Holiday on this day: " + holiday : "No holiday on this day.";
}

// Get the current month and day
var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed, so we add 1 to get the actual month number
var currentDay = currentDate.getDate();

// Check if there is a holiday for the current month and day
var holidayMessage = getHoliday(1, 24);
console.log(holidayMessage);