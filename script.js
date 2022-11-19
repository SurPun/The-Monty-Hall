/* ------------------------------------- Selectors ------------------------------------- */
// Switch / Keep Buttons ---
const btn = document.querySelector("#btn");
const switchBtn = document.getElementById("switch");
const keepBtn = document.getElementById("keep");

/* ------------------------------------- Modal ------------------------------------- */
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

/* ------------------------------------- Simulation ------------------------------------- */
const simContainer = document.getElementById("simulation");
const doors = [];

function setup() {
  for (let i = 0; i < 3; i++) {
    // Create a new div and add Goat for every door (3)
    doors[i] = document.createElement("div");
    doors[i].innerHTML = `
        <p class="goat">🐐</p>
    `;
    doors[i].index = i;
    doors[i].onclick = reveal;

    // Add created content and display in html
    simContainer.appendChild(doors[i]);
  }

  // For every door add classList "door"
  doors.forEach((e) => e.classList.add("door"));

  // Get a random Door and add a prize
  const winningDoor = Math.floor(Math.random() * doors.length);
  doors[winningDoor].innerHTML = `
     <p class="prize">🚗</p>
  `;
}

// Reveal ---
function reveal() {
  this.style.backgroundColor = "green";
  // this.innerHTML = this.innerText;

  const options = [];

  for (let i = 0; i < doors.length; i++) {
    const door = doors[i];
    if (i !== this.index && door.innerText !== "🚗") {
      options.push(door.index);
    }
  }

  doors[options[Math.floor(Math.random() * options.length)]].innerHTML = "🐐";
  // console.log(options);

  // Display Options ---
  btn.style.display = "block";

  // Switch Function
  switchBtn.addEventListener("click", function () {
    console.log("Sucess");
  });

  // Keep Function
  keepBtn.addEventListener("click", function () {
    console.log("Sucess");
  });
}

/* --------------------------------------------------------------------------------- */
setup();
