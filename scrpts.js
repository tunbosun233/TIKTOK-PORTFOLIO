// Handle Web3Forms success message
const form = document.querySelector(".contact-form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData
  });

  if (response.ok) {
    messageDiv.innerText = "Thanks for sending message. You will get response soon.";
    form.reset();
  } else {
    messageDiv.innerText = "Oops! Something went wrong. Try again.";
  }
});
