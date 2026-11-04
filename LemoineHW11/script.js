// --- 1. Toggle Theme ---
const themeButton = document.getElementById("themeToggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  console.log("Theme changed!");
});


// --- 2. Add Items to a List ---
const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
let counter = 1; 

addBtn.addEventListener("click", () => {
 const newItem = document.createElement("li");
  newItem.textContent = "*Task* " + counter + " (Click to blow it up!)";
   list.appendChild(newItem);
   counter++; 
});


// --- 3. Remove Items ---
list.addEventListener("click", (event) => {
  
  if (event.target.tagName === "LI") {
    console.log("Blown to smithereens: " + event.target.textContent); 
    event.target.remove(); 
  }
});


// --- 4. Keyboard Input Event ---
const keyOutput = document.getElementById("keyOutput");
document.addEventListener("keyup", (event) => {
  keyOutput.textContent = "You pressed: " + event.key;
});