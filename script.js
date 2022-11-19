// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
"use strict";

// Get the MODAL ---
const modal = document.getElementById("modal");

// Get the BUTTON that opens the modal ---
const modalBtn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal, index 0
const modalX = document.getElementsByClassName("modalX")[0];

// When the user clicks modalBtn, open the modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on modalX, close the modal
modalX.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
