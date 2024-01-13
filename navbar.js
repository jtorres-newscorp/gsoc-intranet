// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the "navbarContainer" div
    var navbarContainer = document.getElementById("navbarContainer");

    // Fetch the content of navbar.html
    fetch("navbar.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (navbarContent) {
            // Insert the content into the "navbarContainer" div
            navbarContainer.innerHTML = navbarContent;
        })
        .catch(function (error) {
            console.error("Error loading navbar: " + error);
        });
});
