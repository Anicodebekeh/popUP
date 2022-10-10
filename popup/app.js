let popup = document.querySelector(".popup");
let submit = document.querySelector("#submit");

function openPopup() {
  popup.style.display = "block";
  submit.style.display = "none";  
}

function closePopup() {
  popup.style.display = "none";
  submit.style.display = "block";
}
