window.onload = function() {
    alert("Welcome to the website!");
    document.getElementById("Year").textContent = new Date().getFullYear();
}
function CheckAvailability(status) {
    if (status == "Out of Stock") {
        alert("Product is out of stock!");
    }
    else {
        alert("Product is available!");
    }
}
