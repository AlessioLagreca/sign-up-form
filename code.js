var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var errorElement = document.getElementById("passwordError");

function checkPassword() {
  if (password.value !== confirm_password.value) {
    errorElement.innerHTML = "* Passwords do not match";
  } else {
    errorElement.innerHTML = "";
  }
}

function myFunction() {
  document.getElementById("passwordError").innerHTML =
    "The value of the input field was changed.";
}
