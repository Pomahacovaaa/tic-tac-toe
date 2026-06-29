const box = document.getElementById("box");
const result = document.querySelector(".result");

let startTime;
let timeout;
let canClick = false;

function startGame() {
    // Reset the game
    box.style.background = "#D2A2A2";
    result.textContent = "Wait for green...";
    canClick = false;

    // Random delay between 1 and 4 seconds
    const delay = Math.random() * 3000 + 1000;

    timeout = setTimeout(() => {
        box.style.background = "#9DB88F";
        result.textContent = "CLICK NOW!";

        startTime = Date.now();
        canClick = true;
    }, delay);
}

box.addEventListener("click", () => {

    if (canClick) {
        const reactionTime = Date.now() - startTime;
        result.textContent = `Your reaction time: ${reactionTime} ms`;

        canClick = false;

        setTimeout(startGame, 2000);
    } else {
        clearTimeout(timeout);
        result.textContent = "Too early! Wait for green.";

        setTimeout(startGame, 2000);
    }

});

startGame();