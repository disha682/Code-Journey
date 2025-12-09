function fakeAPICall() {
    const screen = document.getElementById("screenOutput");

    screen.textContent = "Fetching user details...";
    console.log("Fetching user details...");

    setTimeout(() => {
        screen.textContent = "User data received!";
        console.log("User data received!");

        setTimeout(() => {
            screen.textContent = "Processing Data...";
            console.log("Processing Data...");
        }, 1500);

    }, 2000);
}

// 🌙 Dark Mode Toggle
const toggleButton = document.getElementById("toggleDark");

toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});
