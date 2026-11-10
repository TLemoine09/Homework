//Form and result section
const form = document.getElementById("contact-form");
const result = document.getElementById("result");

//Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    //Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const color = document.getElementById("color").value;
    const message = document.getElementById("message").value;

    //Display submission summary

    result.innerHTML = `
      <h3>Submission Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Favorite Color:</strong> ${color}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});
