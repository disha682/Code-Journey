async function loadUsers() {
    try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();

        console.log(data.results);

        const grid = document.getElementById("userGrid");
        grid.innerHTML = ""; // clear previous users

        data.results.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${user.picture.large}" alt="User Image">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            `;

            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading users:", error);
    }
}

// Load initial users
loadUsers();
