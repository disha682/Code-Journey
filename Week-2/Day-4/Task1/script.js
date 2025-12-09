async function getUser() {
    try {
        const res = await fetch("https://randomuser.me/api");
        const data = await res.json();

        console.log("User Data:", data);

        const user = data.results[0];

        document.getElementById("profilePic").src = user.picture.large;
        document.getElementById("fullName").textContent =
            `${user.name.first} ${user.name.last}`;
        document.getElementById("email").textContent = user.email;

    } catch (error) {
        console.error("Error fetching user:", error);
    }
}

// Load first user automatically
getUser();
