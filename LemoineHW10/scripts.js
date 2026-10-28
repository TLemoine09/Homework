console.log("DOM HW Loaded");

const titleEl = document.getElementById("video-game-title");
const challengeEl = document.getElementById("challenge");
const gameMainEl = document.getElementById("game-main"); 

// Update main title and challenge
titleEl.textContent = "Video Games";
challengeEl.textContent = "Challenge Completed!";
challengeEl.style.color = "red";
challengeEl.style.fontWeight = "bold";

// Image setup
const imgEl = document.getElementById("game-image");
imgEl.src = "https://media1.tenor.com/m/DtD4LZbctTIAAAAC/tamm-cat.gif";
imgEl.alt = "Game Image Trust";

//Video games list
const items = [
    { name: "The Legend of Zelda", info: "The goat of games" },
    { name: "Resident Evil 4", info: "The comedy" },
    { name: "Minecraft", info: "A game so creative they have a mode for it." }
];

const listEl = document.getElementById("game-list");
listEl.innerHTML = "";
items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.info}`;
    listEl.appendChild(li);
});

// Dark mode toggle 
const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
toggleDarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Highlight mode toggle
const toggleHighlightModeBtn = document.getElementById("toggle-highlight-mode");
toggleHighlightModeBtn.addEventListener("click", () => {
    gameMainEl.classList.toggle("highlight-mode");
});

// Swap image action
const swapImageBtn = document.getElementById("swap-image");
let swapped = false;
swapImageBtn.addEventListener("click", () => {
    if (!swapped) {
        imgEl.src = "https://media1.tenor.com/m/DtD4LZbctTIAAAAC/tamm-cat.gif";
        imgEl.alt = "Swapped Game Image";
        swapped = true;
    } else {
        imgEl.src = "https://media.tenor.com/m3r_8NhxM9MAAAAe/cat-clapping-ai-cat-clapping.png";
        imgEl.alt = "Original Game Image";
        swapped = false;
    }
});