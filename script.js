// You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
"use strict";

// MODAL -------------------------------------
// Get the MODAL ---
const modal = document.getElementById("modal");

// Get the BUTTON that opens the modal ---
const modalBtn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal, index 0 ---
const modalX = document.getElementsByClassName("modalX")[0];

// When the user clicks modalBtn, open the modal ---
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on modalX, close the modal ---
modalX.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it ---
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// Simulation -------------------------------------
const simContainer = document.getElementById("simulation");
const doors = [];

function setup() {
  for (let i = 0; i < 3; i++) {
    // Create a new div and add Goat for every door (3)
    doors[i] = document.createElement("div");
    doors[i].innerHTML = `
        <p>🐐</p>
    `;

    // Add created content and display in html
    simContainer.appendChild(doors[i]);
  }

  // For every door add classList "door"
  doors.forEach((e) => e.classList.add("door"));

  // Get a random Door and add a prize
  const winningDoor = Math.floor(Math.random() * doors.length);
  doors[winningDoor].innerHTML = `
     <p>🚗</p>
  `;
}

setup();
