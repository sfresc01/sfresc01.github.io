function showHideHamburger() {
    var x = document.getElementById("hamburgerItems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}