const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("#form");
const errorElement = document.querySelector("#error");

form.addEventListener("submit", function(e) {
  //Create error message array
  let messages = [];
  //If password confirm doesn't match original password
  if (password.value !== confirmPassword.value) {
    messages.push("Passwords must match");
    //add red error style to message
    errorElement.classList.add("no-match");
  }
  //if email doesn't contain .com
  if (email.value.indexOf(".com") === -1) {
    messages.push("Please provide a valid email address");
    errorElement.classList.add("no-match");
  }
  //if any error messages to display, don't submit form and instead display messages
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join("; ");
  }
});
