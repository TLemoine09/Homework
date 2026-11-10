//Form, and summary section
const guildForm = document.getElementById('guildForm');
const summarySection = document.getElementById('summary');
const summaryContent = document.getElementById('summaryContent');


//Event listener for form submission
guildForm.addEventListener('submit', function(event) {
event.preventDefault();
const gamertag = document.getElementById('gamertag').value;
const email = document.getElementById('email').value;
const characterClass = document.getElementById('characterClass').value;
const startingLevel = document.getElementById('startingLevel').value;
const playstyleInput = document.querySelector('input[name="playstyle"]:checked');
const playstyle = playstyleInput ? playstyleInput.value : 'None';
summaryContent.innerHTML = `
    <p><strong>Gamertag:</strong> ${gamertag}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Character Class:</strong> ${characterClass}</p>
    <p><strong>Starting Level:</strong> ${startingLevel}</p>
    <p><strong>Preferred Playstyle:</strong> ${playstyle}</p>
  `;
summarySection.style.display = 'block';
});