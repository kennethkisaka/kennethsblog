var clockSystem = true;

document.getElementById("24hrs").onclick = function() {
    clockSystem = true;
    twentyFourHours();
};

document.getElementById("12hrs").onclick = function() {
    clockSystem = false;
    ampm();
};

function ampm() {
    const currentTime = new Date(); // Move this line inside the function to get the current time every second
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    //const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine whether it's AM or PM

    //stores true if 12hrs selected and false if 24hrs

    if (hours > 12) {
        document.getElementById("hours-p").textContent = (hours < 10 ? '0' : '') + (hours - 12) + ":";
        //console.log("hours are set");
    } else {
        document.getElementById("hours-p").textContent = (hours < 10 ? '0' : '') + hours + ":";
    }

    // Ensure minutes are displayed with leading zero if less than 10
    document.getElementById("minutes-p").textContent = (minutes < 10 ? '0' : '') + minutes;

    // Display AM or PM
    //document.getElementById("ampm-p").textContent = ampm;
    var am = document.getElementById("am-p");
    var amIcon = document.getElementById("am-icon");
    var pm = document.getElementById("pm-p");
    var pmIcon = document.getElementById("pm-icon");
    //rem-mins/total-mins
    if (hours < 12) {
        am.style.opacity = 1;
        amIcon.style.opacity = 1;
        am.style.color = "black";
        pm.style.opacity = 0.5;
        pmIcon.style.opacity = 0.2;
        pm.style.color = "gray";
    } else if (hours == 12 && minutes == 0) {
        am.style.opacity = 0.5;
        am.style.color = "black";
        amIcon.style.opacity = 0.2;
        pm.style.opacity = 0.5;
        pm.style.color = "black";
        pmIcon.style.opacity = 1;
    } else {
        pm.style.opacity = 1;
        pm.style.color = "black";
        pmIcon.style.opacity = 1;
        am.style.opacity = 0.5;
        am.style.color = "gray";
        amIcon.style.opacity = 0.2;
    }

    //making the span containing "HRS" to be invisible
    document.getElementById("hrs").textContent = "";

}

function twentyFourHours() {
    const currentTime = new Date(); // Move this line inside the function to get the current time every second
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    //const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine whether it's AM or PM

    //stores true if 12hrs selected and false if 24hrs

    document.getElementById("hours-p").textContent = (hours < 10 ? '0' : '') + hours;
    // Ensure minutes are displayed with leading zero if less than 10
    document.getElementById("minutes-p").textContent = (minutes < 10 ? '0' : '') + minutes;
    document.getElementById("hrs").textContent = "HRS";

    //removing am pm and icons
    var am = document.getElementById("am-p");
    var amIcon = document.getElementById("am-icon");
    var pm = document.getElementById("pm-p");
    var pmIcon = document.getElementById("pm-icon");
    am.style.opacity = 0;
    amIcon.style.opacity = 0;
    pm.style.opacity = 0;
    pmIcon.style.opacity = 0;
}

// Call the function initially to display the current time
//ampm();

function main() {
    if (clockSystem) {
        twentyFourHours()
        //ampm()
    } else {
        ampm()
        //twentyFourHours()
    }
}

main()

// Call the function every second to update the time
setInterval(main, 1000);

