const clickSound = new Audio("pop.mp3");

clickSound.volume = 1;

document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
    }
});

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

if (userGuess === randomNumber) {
  lastResult.textContent = "Congratulations! You got it right!";
  lastResult.style.backgroundColor = "#9DB88F";
  lastResult.style.color = "#43513E";
  lowOrHi.textContent = "";
  setGameOver();
} else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
lastResult.style.backgroundColor = "#D2A2A2";
lastResult.style.color = "#5B4343";    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";

   resetButton.classList.add("game--restart");

  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "transparent";
lastResult.style.color = "black";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

