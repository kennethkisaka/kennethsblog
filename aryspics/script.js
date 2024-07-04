document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const url = document.getElementById('urlInput').value;
    if (url) {
        window.location.href = "https://photos.app.goo.gl/LuBd2LgtTte" + url;
    }
});
