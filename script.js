/* ------------------------------------- Selectors ------------------------------------- */
const btn = document.querySelector("#btn");
const switchBtn = document.getElementById("switch");
const keepBtn = document.getElementById("keep");
const playAgain = document.getElementById("play-again");
const displayStats = document.querySelector(".displayStats");

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

// let gameStats = {
//   played: 0,
//   switchPlay: 0,
//   keepPlay: 0,
// };

// Stats Function that takes in localStorage Data and displays in Html
const gameStats = function (played, keepWin, keepLose, switchWin, switchLose) {
  return (displayStats.innerHTML = `
  <h4>Keep</h4>
  <p>Win: ${keepWin} | Lose: ${keepLose}<p>
    
  <h4>Switch</h4>
  <p>Win: ${switchWin} | Lose: ${switchLose}</p>

  <h4>Games Played: ${played}<h4>
`);
};

// Setup ---
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

  // Display Status
  let played = localStorage.getItem("played") || 0;

  let keepWin = localStorage.getItem("keepWin") || 0;
  let keepLose = localStorage.getItem("keepLose") || 0;

  let switchWin = localStorage.getItem("switchWin") || 0;
  let switchLose = localStorage.getItem("switchLose") || 0;

  // Display Stats
  gameStats(played, keepWin, keepLose, switchWin, switchLose);
}

// Reveal ---
function reveal() {
  let pickedDoor = doors[this.index];
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

  // Switch Function ---------------------------
  switchBtn.addEventListener("click", function () {
    if (pickedDoor.innerText === "🐐") {
      console.log("You Win");
      playAgain.style.display = "block";

      let played = localStorage.getItem("played") || 0;
      played++;
      localStorage.setItem("played", played);

      let switchWin = localStorage.getItem("switchWin") || 0;
      switchWin++;
      localStorage.setItem("switchWin", switchWin);

      let keepWin = localStorage.getItem("keepWin") || 0;
      let keepLose = localStorage.getItem("keepLose") || 0;

      let switchLose = localStorage.getItem("switchLose") || 0;

      // Display Stats
      gameStats(played, keepWin, keepLose, switchWin, switchLose);
    } else if (pickedDoor.innerText === "🚗") {
      console.log("You Lose");
      playAgain.style.display = "block";

      let played = localStorage.getItem("played") || 0;
      played++;
      localStorage.setItem("played", played);

      let switchLose = localStorage.getItem("switchLose") || 0;
      switchLose++;
      localStorage.setItem("switchLose", switchLose);

      let keepWin = localStorage.getItem("keepWin") || 0;
      let keepLose = localStorage.getItem("keepLose") || 0;

      let switchWin = localStorage.getItem("switchWin") || 0;

      // Display Stats
      gameStats(played, keepWin, keepLose, switchWin, switchLose);
    }
  });

  // Keep Function
  keepBtn.addEventListener("click", function () {
    if (pickedDoor.innerText === "🚗") {
      console.log("You Win");
      playAgain.style.display = "block";

      let played = localStorage.getItem("played") || 0;
      played++;
      localStorage.setItem("played", played);

      let keepWin = localStorage.getItem("keepWin") || 0;
      keepWin++;
      localStorage.setItem("keepWin", keepWin);

      let keepLose = localStorage.getItem("keepLose") || 0;

      let switchWin = localStorage.getItem("switchWin") || 0;
      let switchLose = localStorage.getItem("switchLose") || 0;

      // Display Stats
      gameStats(played, keepWin, keepLose, switchWin, switchLose);
    } else if (pickedDoor.innerText === "🐐") {
      console.log("You Lose");
      playAgain.style.display = "block";

      let played = localStorage.getItem("played") || 0;
      played++;
      localStorage.setItem("played", played);

      let keepLose = localStorage.getItem("keepLose") || 0;
      keepLose++;
      localStorage.setItem("keepLose", keepLose);

      let keepWin = localStorage.getItem("keepWin") || 0;

      let switchWin = localStorage.getItem("switchWin") || 0;
      let switchLose = localStorage.getItem("switchLose") || 0;

      // Display Stats
      gameStats(played, keepWin, keepLose, switchWin, switchLose);
    }
  });

  playAgain.addEventListener("click", function () {
    location.reload();
  });

  console.log(pickedDoor.innerText);
}

/* --------------------------------------------------------------------------------- */
setup();
