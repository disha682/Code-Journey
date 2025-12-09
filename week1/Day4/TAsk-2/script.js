// Ask user name when page loads
let userName = prompt("Enter your name:");

// If user clicks cancel or leaves empty, set default
if (!userName || userName.trim() === "") {
    userName = "Guest";
}

// Display dynamically on page
document.getElementById("welcomeText").textContent = `Welcome, ${userName}!`;
