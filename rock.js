const clickSound = new Audio("pop.mp3");

clickSound.volume = 0.3;

document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
    }
});
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');

    const movesLeft = document.querySelector('.movesLeft');
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    const moveText = document.querySelector('.move');
    const reloadBtn = document.querySelector('.reload');

    const computerOptions = ['rock', 'paper', 'scissors'];

    const buttons = [rockBtn, paperBtn, scissorBtn];

    buttons.forEach(button => {
        button.addEventListener('click', function () {

            if (moves === 10) return;

            moves++;
            movesLeft.innerText = `Moves left: ${10 - moves}`;

            const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

            winner(this.innerText.toLowerCase(), computerChoice);

            if (moves === 10) {
                gameOver();
            }
        });
    });

    const winner = (player, computer) => {
        if (player === computer) {
            result.innerText = "Tie";
        }
        else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            result.innerText = "Player Wins";
            playerScore++;
            playerScoreBoard.innerText = playerScore;
        }
        else {
            result.innerText = "Computer Wins";
            computerScore++;
            computerScoreBoard.innerText = computerScore;
        }
    };

    const gameOver = () => {
        moveText.innerText = "Game Over";

        if (playerScore > computerScore) {
            result.innerText = "You Won!";
        } else if (playerScore < computerScore) {
            result.innerText = "You Lost!";
        } else {
            result.innerText = "Tie Game!";
        }

        reloadBtn.innerHTML = `<button onclick="location.reload()">Restart</button>`;
    };
};

game();