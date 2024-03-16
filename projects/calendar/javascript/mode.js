document.getElementById("mode-button").onclick = function() {
    var body = document.getElementsByTagName("body")[0];
    var image = document.getElementById("mode");
    var button = document.getElementById("mode-button");
    var paragraphs = document.getElementsByTagName("p");
    var spans = document.getElementsByTagName("span");

    // Use window.getComputedStyle to get the computed style of the element
    var computedStyle = window.getComputedStyle(body);

    // Get the background-color property value
    var backgroundColor = computedStyle.backgroundColor;

    // Check if the background color is currently black or white
    if (backgroundColor === "rgb(0, 0, 0)" || backgroundColor === "black") {
        body.style.backgroundColor = "white";
        image.src = "icons/darkmode.png";
        
        for (var i = 0; i < paragraphs.length; i++) {
            // Set the color of each paragraph to white
            paragraphs[i].style.color = "black";
        }
        for (var i = 0; i < spans.length; i++) {
            // Set the color of each paragraph to white
            spans[i].style.color = "black";
        }
        
    } else {
        body.style.backgroundColor = "black";
        image.src = "icons/lightmode.png";
        button.style.backgroundColor = "white";
        
        for (var i = 0; i < paragraphs.length; i++) {
            // Set the color of each paragraph to white
            paragraphs[i].style.color = "white";
        }
        for (var i = 0; i < spans.length; i++) {
            // Set the color of each paragraph to white
            spans[i].style.color = "white";
        }
    }
};
