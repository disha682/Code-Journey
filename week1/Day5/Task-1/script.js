const text = document.getElementById("text");

/* THEME SWITCH */
document.getElementById("lightBtn").onclick = () => {
    document.body.className = "light";
};

document.getElementById("darkBtn").onclick = () => {
    document.body.className = "dark";
};

/* COLOR CHANGE */
function changeColor(color) {
    text.style.color = color;
}

/* FONT FAMILY */
function changeFontFamily() {
    let font = document.getElementById("fontSelect").value;
    text.style.fontFamily = font;
}

/* FONT SIZE */
let size = 22;

function changeSize(val) {
    size += val;
    text.style.fontSize = size + "px";
}

/* FONT STYLES */
function makeBold() { text.style.fontWeight = "bold"; }
function makeItalic() { text.style.fontStyle = "italic"; }
function makeUnderline() { text.style.textDecoration = "underline"; }
