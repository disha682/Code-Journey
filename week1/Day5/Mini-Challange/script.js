// Default theme is light
document.body.classList.add('light');

function setLightTheme() {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
}

function setDarkTheme() {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
}
