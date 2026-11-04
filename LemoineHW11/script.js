// --- 1. Toggle Theme (Click Event) ---
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
 
  document.body.classList.toggle("dark");
  console.log("Theme changed!");
});


// --- 2. Add Items to a List ---
const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
let counter = 1; // Keeps track of item numbers

addBtn.addEventListener("click", () => {
  // Create a new list item in memory
  const newItem = document.createElement("li");
  
  newItem.textContent = "*Task* " + counter + " (Click to blow it up!)";
  
  list.appendChild(newItem);
  
  counter++; 
});


// --- 3. Remove Items (Delegation Trick & Challenge) ---
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