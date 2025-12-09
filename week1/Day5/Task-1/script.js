let text = document.getElementById("text");
let fontSize = 24;
text.style.fontSize = fontSize + "px";

// Change color
function changeColor(color) {
    text.style.color = color;
}

// Change font family
function changeFont() {
    let selectedFont = document.getElementById("fontSelect").value;
    text.style.fontFamily = selectedFont;
}

// Increase font size
function increaseSize() {
    fontSize += 2;
    text.style.fontSize = fontSize + "px";
}

// Decrease font size
function decreaseSize() {
    fontSize -= 2;
    text.style.fontSize = fontSize + "px";
}

// Font Style Hover Effects
document.getElementById("boldBtn").onmouseover = () => text.style.fontWeight = "bold";
document.getElementById("boldBtn").onmouseout = () => text.style.fontWeight = "normal";

document.getElementById("italicBtn").onmouseover = () => text.style.fontStyle = "italic";
document.getElementById("italicBtn").onmouseout = () => text.style.fontStyle = "normal";

document.getElementById("underlineBtn").onmouseover = () => text.style.textDecoration = "underline";
document.getElementById("underlineBtn").onmouseout = () => text.style.textDecoration = "none";
