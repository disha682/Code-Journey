async function loadPosts() {
    const outputBox = document.getElementById("posts");
    outputBox.textContent = "Loading posts...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = await response.json();

        console.log("Latest Posts:", posts);

        // Show posts in browser
        outputBox.innerHTML = posts
            .map(post => `<p><strong>${post.title}</strong><br>${post.body}</p><hr>`)
            .join("");

    } catch (error) {
        console.error("Error loading posts:", error);
        outputBox.textContent = "Failed to load posts!";
    }
}

loadPosts();  // auto load on page start
