const button = document.getElementsByClassName("btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const textarea = document.getElementById("textarea");

function eraseInput() {
  nameInput.value = "";
  emailInput.value = "";
  textarea.value = "";
}
