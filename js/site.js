function querystring(obj) {  
    const result = [];
    let match;
    const re = new RegExp('(?:\\?|&)' + obj + '=(.*?)(?=&|$)', 'gi');
    while ((match = re.exec(document.location.search)) !== null) {
        result.push(match[1]);
    }
    return result;
}

function showHideHamburger() {
    var x = document.getElementById("hamburgerItems");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}