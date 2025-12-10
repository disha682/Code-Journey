async function loadUsers() {
    const list = document.getElementById("userList");
    list.innerHTML = "<p>Loading users...</p>";

    try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();

        list.innerHTML = ""; // clear old

        data.results.forEach((user, index) => {
            const div = document.createElement("div");
            div.className = "user-card";
            div.style.animationDelay = `${index * 0.1}s`; // staggered animation

            div.innerHTML = `
                <img src="${user.picture.large}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            `;

            list.appendChild(div);
        });

    } catch (error) {
        list.innerHTML = "<p>Error loading users</p>";
        console.error(error);
    }
}

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    darkModeBtn.textContent =
        document.body.classList.contains("dark") ? " Light Mode" : " Dark Mode";
});

// Load initial users
loadUsers();
