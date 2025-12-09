// SELECT ELEMENTS
const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");
const darkToggle = document.getElementById("darkToggle");

// LOAD 12 RANDOM IMAGES
for (let i = 1; i <= 12; i++) {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    const img = document.createElement("img");
    img.src = `https://picsum.photos/400?random=${i}`;

    img.onclick = () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    };

    card.appendChild(img);
    gallery.appendChild(card);
}

// CLOSE POPUP
closePopup.onclick = () => {
    popup.style.display = "none";
};

// DARK MODE
darkToggle.onclick = () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};
