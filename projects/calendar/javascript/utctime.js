var utcClockSystem = true;

document.getElementById("utc24hrs").onclick = function() {
    utcClockSystem = true;
    utcTwentyFourHours();
};

document.getElementById("utc12hrs").onclick = function() {
    utcClockSystem = false;
    utcAmPm();
};

function utcAmPm() {
    const currentTime = new Date(); // Move this line inside the function to get the current time every second
    const hours = currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes();
    //const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine whether it's AM or PM

    if (hours >= 12) {
        document.getElementById("utc-hours-p").textContent = (hours < 10 ? '0' : '') + (hours - 12) + ":";
    } else {
        document.getElementById("utc-hours-p").textContent = (hours < 10 ? '0' : '') + hours + ":";
    }

    // Ensure minutes are displayed with leading zero if less than 10
    document.getElementById("utc-minutes-p").textContent = (minutes < 10 ? '0' : '') + minutes;

    // Display AM or PM
    //document.getElementById("ampm-p").textContent = ampm;
    var am = document.getElementById("utc-am-p");
    var amIcon = document.getElementById("utc-am-icon");
    var pm = document.getElementById("utc-pm-p");
    var pmIcon = document.getElementById("utc-pm-icon");
    //rem-mins/total-mins
    if (hours < 12) {
        am.style.opacity = 1;
        am.style.color = "black";
        amIcon.style.opacity = 1;
        pm.style.opacity = 0.5;
        pm.style.color = "gray";
        pmIcon.style.opacity = 0.2;
    } else if (hours == 12 || hours == 0) {
        am.style.opacity = 0.5;
        am.style.color = "black";
        amIcon.style.opacity = 1;
        pm.style.opacity = 0.5;
        pm.style.color = "black";
        pmIcon.style.opacity = 1;
    } else {
        pm.style.opacity = 1;
        pm.style.color = "black";
        pmIcon.style.opacity = 1;
        am.style.opacity = 0.5;
        am.style.color = "gray";
        amIcon.style.opacity = 0.5;
    }

    document.getElementById("utc-hrs").textContent = "";
}

function utcTwentyFourHours() {
    const utcCurrentTime = new Date(); // Move this line inside the function to get the current time every second
    const utcHours = utcCurrentTime.getUTCHours();
    const utcMinutes = utcCurrentTime.getUTCMinutes();
    //const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine whether it's AM or PM

    //stores true if 12hrs selected and false if 24hrs

    document.getElementById("utc-hours-p").textContent = (utcHours < 10 ? '0' : '') + utcHours;
    // Ensure minutes are displayed with leading zero if less than 10
    document.getElementById("utc-minutes-p").textContent = (utcMinutes < 10 ? '0' : '') + utcMinutes;
    document.getElementById("utc-hrs").textContent = "HRS";

    //removing am pm and icons
    var utcAm = document.getElementById("utc-am-p");
    var utcAmIcon = document.getElementById("utc-am-icon");
    var utcPm = document.getElementById("utc-pm-p");
    var utcPmIcon = document.getElementById("utc-pm-icon");
    utcAm.style.opacity = 0;
    utcAmIcon.style.opacity = 0;
    utcPm.style.opacity = 0;
    utcPmIcon.style.opacity = 0;
    console.log("not working fine");
}

function utcMain() {
    if (utcClockSystem) {
        utcTwentyFourHours()
        //ampm()
    } else {
        utcAmPm()
        //twentyFourHours()
    }
}

utcMain()

// Call the function every second to update the time
setInterval(utcMain, 1000);

